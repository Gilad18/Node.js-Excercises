const express = require('express');
const router = express.Router();
const productControllers = require('./controller')

router.get('/',(req,res)=>{
    productControllers.getAll(req,res);
}).post('/',(req,res)=>{
    productControllers.create(req,res);
 }).get('/:name', (req,res)=> {
    productControllers.getProductByName(req,res)
 }).get('/status/active', (req,res) => {
     productControllers.getProductbyStatus(req,res)
 }).get('/price/:amount', (req,res)=> {
     productControllers.getProductsByPrice(req,res)
 })

module.exports = router;