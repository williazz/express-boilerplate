const axios = require('axios');
const getAccessToken = require('./getAccessToken');

async function requestWithAccessToken({ url, method, ...options }) {
  const { access_token, token_type } = await getAccessToken();
  const authorization = [token_type, access_token].join(' ');
  const config = {
    headers: {
      authorization,
    },
    url,
    method,
    ...options,
  };
  return axios(config);
}

module.exports = requestWithAccessToken;
