require('rootpath')();
const app = require('app');
const config = require('config.json');

const PORT = process.env.PORT || config.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
