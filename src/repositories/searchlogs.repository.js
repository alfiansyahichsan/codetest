const { SearchLogs } = require('../../models');

const functions = {
  create(config) {
    SearchLogs.create({
      endpoint: config['baseURL'],
      parameters: JSON.stringify(config['params']),
    });
  },

  read() {
    return SearchLogs.findAll({}).then((data) => data);
  },
};

module.exports = functions;
