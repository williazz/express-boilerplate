const mongoose = require('mongoose');
/* eslint-disable import/no-unresolved */
const config = require('config.json');
const User = require('services/users/user.model');
/* eslint-enable import/no-unresolved */

const connectionString = process.env.MONGO_URI || config.MONGO_URI;
const connectionOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose.connect(connectionString, connectionOptions);

const isValidId = mongoose.Types.ObjectId.isValid;

module.exports = {
  User,
  isValidId,
};
