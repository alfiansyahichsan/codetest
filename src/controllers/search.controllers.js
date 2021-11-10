const SearchService = require('../services/search.services');

const functions = {
  /**
   * @param  {} req
   * @param  {} res
   */
  async getByParam(req, res) {
    const { s, p } = req.query;

    try {
      const data = await new SearchService({ s, p }).get();

      res.status(200).json(data['Search']);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  /**
   * @param  {} req
   * @param  {} res
   */
  async getById(req, res) {
    const { id } = req.params;

    try {
      const data = await new SearchService({ i: id }).get();

      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  async getSearchLogs(req, res) {
    try {
      const data = await new SearchService().getLogs();

      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  },
};

module.exports = functions;
