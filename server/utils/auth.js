const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config/config')


const expiration = '2h';

module.exports = {
  // function for our authenticated routes
  authMiddleware: function ({ req }) {
    // allows token to be sent via  req.query or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req; 
    }

    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, SECRET_KEY, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
      
    }
    return req;

 
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, SECRET_KEY, { expiresIn: expiration });
  },
};
