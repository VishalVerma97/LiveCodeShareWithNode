const express = require('express');
const app = express();
const config = require('./config/config');
const logger = require('./utils/logger');
const api = require('./api/api');

// db.url is different depending on NODE_ENV
require('mongoose').connect(config.db.url);

// setting app middlewares
require('./middlewares/appMiddleware')(app);

// setting the apis
app.use('/', api);

// setting global error logger
app.use(function(err, req, res, next) {
  logger.log(err);
  res.status(500).send('Oops');
});

module.exports = app;