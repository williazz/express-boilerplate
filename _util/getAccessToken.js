const appRoot = require('app-root-path');
const axios = require('axios');
const { AUTH0 } = require(appRoot + '/config');

const body = {
  client_id: AUTH0.CLIENT_ID,
  client_secret: AUTH0.CLIENT_SECRET,
  audience: AUTH0.AUDIENCE,
  grant_type: 'client_credentials',
};

const config = {
  url: `https://${AUTH0.DOMAIN}/oauth/token`,
  headers: { 'content-type': 'application/json' },
  data: JSON.stringify(body),
  method: 'post',
};

function getAccessToken() {
  return axios(config).then(({ data }) => data);
}

module.exports = getAccessToken;
