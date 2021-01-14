const express = require('express');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

const router = express.Router();

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://williazz.us.auth0.com/.well-known/jwks.json',
  }),
  audience: 'https://quickstarts/api',
  issuer: 'https://williazz.us.auth0.com/',
  algorithms: ['RS256'],
});

router.use(jwtCheck);

router.get('/authorized', (req, res) => {
  res.send('Secured Resource');
});

module.exports = router;
