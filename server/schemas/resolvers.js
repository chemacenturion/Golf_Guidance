const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
Query: {
    getUser: async (parent, { username }, context) => {
      
      if (context.user) {
        const userInfo = await User.findOne({_id: context.user._id})
        
        return userInfo;
      }
      throw new AuthenticationError('You are not logged in');
    },

    async getUsers(){
      try{
        const users = await User.find();
        return users;
      } catch(err){
        throw new Error(err);
      }
    }
  },


Mutation: {
    
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
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
  },
};

module.exports = resolvers;