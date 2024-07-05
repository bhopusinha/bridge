const axios = require('axios');

const getQuote = async (srcChainId, srcQuoteTokenAddress, srcQuoteTokenAmount, dstChainId, dstQuoteTokenAddress, slippage, srcSwapProviders, bridgeProviders) => {
  const response = await axios.get(`https://aggregator-api.xy.finance/v1/quote`, {
    params: {
      srcChainId,
      srcQuoteTokenAddress,
      srcQuoteTokenAmount,
      dstChainId,
      dstQuoteTokenAddress,
      slippage
    }
  });
  return response.data;
};

const approveTransaction = async (tokenAddress, spender, amount) => {
  const response = await axios.get(`https://aggregator-api.xy.finance/v1/approveTx`, {
    params: {
      tokenAddress,
      spender,
      amount
    }
  });
  return response.data;
};

module.exports = { getQuote, approveTransaction };
