const crypto = require('crypto');
const Joi = require('joi');
const User = require('./user.model');
const Password = require('./password.service');
const Token = require('./token.service.js');

async function randomString(len = 40) {
  return (new Promise((resolve, reject) => {
    crypto.randomBytes(len, (err, buf) => {
      if (err) reject (err);
      else return buf.toString('hex');
    })
  }))();
}

const UserValidationSchema = Joi.object({
  username: Joi.string().alphanum().alphanum().min(1).max(30).required(),
  rawPassword: Joi.string().min(8).max(64).required(),
  email: Joi.string().email().required(),
});

async function createUserSafely() {}

async function authenticate({ username, password, ipAddress }) {}
async function refreshToken() {}
async function revokeToken() {}
async function getById() {}
function generateJwtToken(user) {}
function genereateRefreshToken(user, ipAdress) {}
