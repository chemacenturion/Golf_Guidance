const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Purchase = require('./Purchase');
const Scorecard = require('./Scorecard');


const userSchema = new Schema (
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address']
        },

        password: {
            type: String,
            required: true,
        },

        purchases: [Purchase.schema],
        scorecards: [Scorecard.schema]
    },
    {
    toJSON: {
            virtuals: true,
        },
    }
);

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // custom method to compare and validate password for logging in
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  
  
  
  const User = model('User', userSchema);
  
  module.exports = User;
  