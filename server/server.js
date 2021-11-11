const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth.js');
const app = express();
const PORT = process.env.PORT || 3001;


const server = new ApolloServer({
  introspection: true,
  typeDefs,
  resolvers,
  context: authMiddleware,
  playground: true
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Strip ============================================================================================================================================
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const YOUR_DOMAIN = `http://localhost:3000`;

app.post('/create-checkout-session', async (req, res) => {
  console.log("=================================")
  console.log("req.body", req.body)
  console.log("req.url", req.url)
  console.log("req.params", req.params)
  console.log("req.query", req.query)
  console.log("PORT is: ", PORT)
  console.log("=================================")
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Replace with the product you want to sell (comes from req.body)
        price_data: {
          currency: 'usd',
          product_data: {
            name: req.body.name,
          },
          unit_amount: req.body.price,
        },
        quantity: 1,
      },
    ],
    payment_method_types: [
      'card',
    ],
    mode: 'payment',
    // eventually, make sure to replace these with the real URL of the app (not localhost)
    success_url: `http://localhost:3000/success`,
    cancel_url: `http://localhost:3000/cancel`,
  });


  res.json({ id: session.id });
  // res.redirect(303, session.url);
});
// Strip ============================================================================================================================================
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});