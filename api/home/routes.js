const logger = require('../../utils/logger');

const homeRouter = require('express').Router();
const process = require('process');

homeRouter.get('/', function(req, res, next) {
  res.sendFile(process.cwd() + '/templates/home.html', function(err, buffer) {
    if(buffer) {
      let html = buffer.toString();
      res.setHeader('Content-Type', 'text/html');
      res.send(html);
    } else {
      next(err);
    }
  })
});

module.exports = homeRouter;