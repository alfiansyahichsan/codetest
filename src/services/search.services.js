require('dotenv').config();
let axios = require('axios');

const { create, read } = require('../repositories/searchlogs.repository');

class FetchService {
  /**
   * @param  {} params
   */
  constructor(params) {
    this.client = axios.create({
      baseURL: `${process.env.OMDB_URL}/?apikey=${process.env.OMDB_KEY}`,
      params: params,
    });
  }

  async get() {
    return await this.client.get().then((res) => {
      // SAVE ENDPOINT & PARAMS TO SEARCH LOGS
      // DONT HAVE TO AWAIT THIS FUNC
      create(res.config);

      return res.data;
    });
  }

  async getLogs() {
    return await read();
  }
}

module.exports = FetchService;
