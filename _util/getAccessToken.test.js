const getAccessToken = require('./getAccessToken');

describe('getAccessToken', () => {
  it('should get a token', () =>
    getAccessToken().then(({ access_token, token_type }) => {
      expect(token_type).toBe('Bearer');
      expect(access_token).toBeTruthy();
    }));
});
