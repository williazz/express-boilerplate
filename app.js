const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authzApi = require('services/auth0-api/auth0-api.controller');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/auth0-api', authzApi);

module.exports = app;
