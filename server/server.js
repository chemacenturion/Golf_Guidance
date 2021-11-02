const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth.js');
const app = express();
const PORT = process.env.PORT || 3001;

async function runApolloServer() {

const server = new ApolloServer({
  introspection: true,
  typeDefs,
  resolvers,
  context: authMiddleware
});

await server.start();

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

}

runApolloServer(); 