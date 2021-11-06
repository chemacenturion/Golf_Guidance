const { User, Course, Order, Merch } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');
// const stripe = require('stripe')('needkey');

const resolvers = {
Query: {

  getMerch: async() => {
    return await Merch.find(); 
  },

  getProductById: async (parent, {_id }) => {
    return await Merch.findById(_id)
  },

  getOrder: async (parent, { id }, context) => {
    if (context.user) {

      const user = await User.findById(context.user_id)
      return user.orders.id(_id); 
    }
    throw new AuthenticationError("Not logged in");
  },

  checkout: async (parent, args, context) => {
    const url = new URL(context.headers.referer).origin;
    const order = new Order({ merch: args.merch });
    const line_items = [];

    const { merch } = await order.populate('merch').execPopulate();

    for (let i = 0; i < merch.length; i++) {
      const product = await stripe.merch.create({
        name: merch[i].name,
        description: merch[i].description,
        images: [`${url}/images/${merch[i].image}`]
      });

      const price = await stripe.prices.create({
        product: product.id,
        unit_amount: products[i].price * 100,
        currency: 'usd',
      });

      line_items.push({
        price: price.id,
        quantity: 1
      });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${url}/`
    });

    return { session: session.id };
  },


  getAllUsers: async () => {
 
      return User.find({});
  
    },
  
  getUserbyId: async (parent, { username }, context) => {
    
    if (context.user) {
      const userInfo = await User.findOne({_id: context.user._id})
      
      return userInfo;
    }
    throw new AuthenticationError('You are not logged in');
  },

  getCourseData: async () => {

  return Course.find({})
    
    },

  
},




Mutation: {
    
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    addCourseData: async (parent, { courseName, holeCount, par, courseRating, slopeRating }) => {
      const courseData = await Course.create({ courseName, holeCount, par, courseRating, slopeRating });
      return courseData;
    },
    
    
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });

      

    },

    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    }
  },
};

module.exports = resolvers;