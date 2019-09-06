/* eslint-disable */

switch (process.env.NODE_ENV) {
  case 'production':
  case 'prod':
    module.exports = require('./scripts/webpack.prod.config.js');
    break;
  case 'development':
  case 'dev':
  default:
    module.exports = require('./scripts/webpack.dev.config.js');
    break;
}
