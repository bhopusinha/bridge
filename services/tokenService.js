const axios = require('axios');

const fetchTokens = async () => {
  const response = await axios.get('https://aggregator-api.xy.finance/v1/recommendedTokens');
  return response.data;
};

module.exports = { fetchTokens };
