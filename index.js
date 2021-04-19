const config = require('./config/config');

const server = require('./server');
const logger = require('./utils/logger');

server.listen(config.port);

server.get('/', function(req, res) {
  res.status(200).send('Hello World');
})
logger.log('server is listening on port:', config.port);