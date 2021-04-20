const bodyParser = require('body-parser');
const express = require('express');
const process = require('process');

module.exports = function(app) {
  app.use(express.static(process.cwd()));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
}