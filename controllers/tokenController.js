const { fetchTokens } = require('../services/tokenService');

const getTokens = async (req, res) => {
  try {
    // console.log(req.query.blockchain);
    const tokens = await fetchTokens(req.query.blockchain);
    res.json(tokens);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getTokens };
