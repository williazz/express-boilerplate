const axios = require('axios');
const getAccessToken = require('./getAccessToken');

async function requestWithAccessToken({ url, method, ...options }) {
  getAccessToken().then(({ data }) => {
    const authorization = [data.token_type, data.access_token].join(' ');
    return axios({
      url,
      method,
      authorization,
      ...options,
    });
  });
}

module.exports = requestWithAccessToken;
