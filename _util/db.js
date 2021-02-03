const appRoot = require('app-root-path');
const mongoose = require('mongoose');
const config = require(appRoot + '/config');
const User = require(appRoot + '/services/users/user.model');

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
