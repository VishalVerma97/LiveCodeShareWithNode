const config = require('./config/config');

const server = require('./server');
const logger = require('./utils/logger');

server.listen(config.port);

logger.log('server is listening on port:', config.port);