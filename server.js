const express = require('express');
const app = express();
const config = require('./config/config');

// db.url is different depending on NODE_ENV
require('mongoose').connect(config.db.url);

module.exports = app;