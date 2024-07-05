const express=require('express');
const {postQuote, postParams } = require('../controllers/quoteController.js');

const quoteRouter=express.Router();

quoteRouter.post('/', postQuote);
quoteRouter.post('/params', postParams);

module.exports=quoteRouter;