require('dotenv').config();
let axios = require('axios');

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

  async fetch() {
    return await this.client.get().then((res) => res.data);
  }
}

module.exports = FetchService;
