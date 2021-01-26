const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const auth = require('services/auth/auth.controller');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api', auth);

module.exports = app;
