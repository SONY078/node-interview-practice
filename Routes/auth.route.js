const express = require('express');
const {Mex} = require('../Middlewares/mex');
const Router = express.Router();

Router.get('/',function(req,res)
{
    res.send('iam router');
})
Router.get('/data',Mex,function(req,res)
{
    res.send('iam coming from mex');
})

module.exports = Router;
