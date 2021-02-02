const jwtAuthz = require('express-jwt-authz');

/**
 * Checks the scopes of a jwt
 * @param {[String]} scopes
 */
const checkScopes = (scopes = []) => jwtAuthz(scopes);

module.exports = checkScopes;
