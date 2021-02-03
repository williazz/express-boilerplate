const appRoot = require('app-root-path');
const requestWithAccessToken = require('./requestWithAccessToken');
const app = require(appRoot + '/app.js');

let server;
const PORT = 3099;

beforeAll(() => {
  server = app.listen(PORT);
});

it('should access public resource', () => {
  const url = `http://localhost:${PORT}/api/public`;
  return requestWithAccessToken({
    url,
    method: 'get',
  });
});

it('should access private resource', () => {
  const url = `http://localhost:${PORT}/api/private`;
  return requestWithAccessToken({
    url,
    method: 'get',
  });
});

it('should access private-scoped resource', () => {
  const url = `http://localhost:${PORT}/api/private-scoped`;
  return requestWithAccessToken({
    url,
    method: 'get',
  });
});

afterAll(() => {
  server.close();
});
