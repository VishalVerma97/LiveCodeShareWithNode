const logger = require("../utils/logger");

let config = {
  dev: 'development',
  test: 'testing',
  prod: 'production',
  port: process.env.PORT || 3000,
}

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;


config.env = process.env.NODE_ENV;

let envConfig;

try {
  envConfig = require('./' + config.env);

  envConfig = envConfig || {};
} catch(e) {
  envConfig = {};
}
config = {
  ...config,
  ...envConfig
}

console.log('thse are config', config);

module.exports = config;