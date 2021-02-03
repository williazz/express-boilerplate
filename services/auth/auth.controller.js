const appRoot = require('app-root-path');
const express = require('express');
const checkJwt = require(appRoot + '/_middleware/checkJwt.js');
const checkScopes = require(appRoot + '/_middleware/checkScopes.js');

const router = express.Router();

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

const checkScopeReadMessages = checkScopes(['read:messages']);

router.get('/private-scoped', checkJwt, checkScopeReadMessages, (req, res) => {
  res.json({
    message:
      'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.',
  });
});

module.exports = router;
