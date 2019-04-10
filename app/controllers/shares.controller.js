const sharesService = new (require('../services/shares.service'))();

function getDataFromShares(shares) {
  const timeSeries = shares['Time Series (Daily)'];
  const timesSerieSorted = Object.keys(timeSeries).sort((prev, next) => {
    return new Date(prev) < new Date(next) ? 1 : -1;
  });

  const valueIndex = timesSerieSorted[0];
  const value = Number(timeSeries[valueIndex]['4. close']).toFixed(2);

  const previousIndex = timesSerieSorted[1];
  const previous = Number(timeSeries[previousIndex]['4. close']).toFixed(2);

  const change_percent = (Number(value) / Number(previous)).toFixed(2);
  const change_value = (Number(value) - Number(previous)).toFixed(2);

  return { value, previous, change_percent, change_value };
}

module.exports = class SharesController {
  async get(req, res) {
    const { symbol } = req.params;

    const shares = await sharesService.get({
      symbol,
    });
    const { value, previous, change_percent, change_value } = getDataFromShares(
      shares,
    );
    res.json({
      symbol,
      value,
      previous,
      change_percent,
      change_value,
      color_code: change_value >= 0 ? 'green' : 'red',
    });
  }
};
