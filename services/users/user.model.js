const mongoose = require('mongoose');

const USERNAME_LEN = {
  MAX: 30,
  MIN: 1,
};

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: USERNAME_LEN.MIN,
    maxlength: USERNAME_LEN.MAX,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  passwordSalt: {
    type: String,
    required: true,
  },
});

// Mongoose Schema Options
// https://mongoosejs.com/docs/guide.html#options
schema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  // Unsure what exactly version key does
  // https://github.com/cornflourblue/node-mongo-jwt-refresh-tokens-api/blob/master/users/user.model.js

  transform (doc, ret) {
    // to hide secrets
    /* eslint-disable no-param-reassign */
    delete ret._id;
    delete ret.passwordHash;
    delete ret.passwordSalt;
    /* eslint-enable no-param-reassign */
  },
});

module.exports = mongoose.model('User', schema);
