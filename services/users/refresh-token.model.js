const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  token: String,
  expires: Date,
  // setting default val to a func will execute that func for the defautl val
  created: { type: Date, default: Date.now },
  createdByIp: String,
  revoked: Date,
  revokedByIp: String,
  replaceByToken: String,
});

/**
 * @returns {Boolean}
 */
schema.virtual('isExpired').get(function getIsExpired() {
  return Date.now() >= this.expires;
});

/**
 * @returns {Boolean}
 */
schema.virtual('isActive').get(function getIsVirtual() {
  return Date.now() < this.expires;
});

/**
 * When converting refreshToken to JSON: hides secrets, includes virutals, and removes version key
 */
schema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform (doc, ret = {}) {
    /* eslint-disable no-param-reassign */
    delete ret._id;
    delete ret.user;
    /* eslint-enable no-param-reassign */
  },
});
