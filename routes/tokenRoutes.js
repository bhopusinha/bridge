const express=require('express');
const { getTokens } = require('../controllers/tokenController.js');

const tokenRouter=express.Router();


tokenRouter.route('/').get(getTokens);

module.exports=tokenRouter;