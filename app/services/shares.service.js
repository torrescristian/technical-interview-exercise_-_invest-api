const url = require('url');
const config = require('config');
const axios = require('axios');

module.exports = class ShareService {
  async get({ symbol }) {
    const service = config.get('alphavantage.url');
    const path = url.format({
      protocol: service.protocol,
      hostname: service.hostname,
      pathname: service.pathname,
      query: {
        apikey: config.get('alphavantage.key'),
        function: 'TIME_SERIES_DAILY',
        outputsize: 'compact',
        symbol,
      },
    });
    const response = await axios.get(path);
    return response.data;
  }
};
