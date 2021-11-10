const { SearchLogs } = require('../../models');

const functions = {
  create(config) {
    SearchLogs.create({
      endpoint: config['baseURL'],
      parameters: JSON.stringify(config['params']),
    });
  },
};

module.exports = functions;
