const mongoose = require('mongoose');
const { MONGODB } = require('./config')

mongoose.connect(MONGODB || 'mongodb://localhost/golfguidance', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
});

module.exports = mongoose.connection;