const { getQuote, createTransaction, approveTransaction } = require('../services/quoteServices');

const postQuote = async (req, res) => {
  try {
    const { srcChainId, srcQuoteTokenAddress, srcQuoteTokenAmount, dstChainId, dstQuoteTokenAddress, slippage, srcSwapProviders, bridgeProviders } = req.body;
    const quote = await getQuote(srcChainId, srcQuoteTokenAddress, srcQuoteTokenAmount, dstChainId, dstQuoteTokenAddress, slippage, srcSwapProviders, bridgeProviders);
    res.json(quote);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const postParams = async (req, res) => {
  try {
    const { tokenAddress, spender, amount } = req.body;
    const params = await approveTransaction(tokenAddress, spender, amount);
    res.json(params);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { postQuote, postParams };
