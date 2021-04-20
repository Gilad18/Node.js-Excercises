const express = require('express');
const router = express.Router();
const productControllers = require('./controller')

router.get('/',(req,res)=>{
    productControllers.getAll(req,res);
}).post('/',(req,res)=>{
    productControllers.create(req,res);
 })

module.exports = router;