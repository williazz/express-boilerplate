const express = require('express');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const jwtAuthz = require('express-jwt-authz');
const { AUTH0 } = require('config.js');

const router = express.Router();

const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: AUTH0.JWKS_URI,
  }),
  audience: AUTH0.AUDIENCE,
  issuer: AUTH0.ISSUER,
  algorithms: ['RS256'],
});

router.get('/public', (req, res) => {
  res.json({
    message: 'Public information',
  });
});

router.get('/private', checkJwt, (req, res) => {
  res.json({
    message: 'private information',
  });
});

const checkScopes = jwtAuthz(['read:messages']);

router.get('/private-scoped', checkJwt, checkScopes, (req, res) => {
  res.json({
    message:
      'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.',
  });
});

module.exports = router;
