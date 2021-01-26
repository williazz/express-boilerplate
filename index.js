require('rootpath')();
const app = require('app');
const config = require('config.js');

const PORT = config.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Listening on port: ', PORT);
});
