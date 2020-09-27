const express = require('express');
const router = expres.Router();

/* GET home page. */
rouoter.get('/',(req,res,next)=> {

res.render('index',{title: 'Surf Shop - Home'});
});

module.exports = router; 