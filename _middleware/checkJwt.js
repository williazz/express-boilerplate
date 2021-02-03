const appRoot = require('app-root-path');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const { AUTH0 } = require(appRoot + '/config');

/**
 * Checks a jwt using a config
 */

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

module.exports = checkJwt;
