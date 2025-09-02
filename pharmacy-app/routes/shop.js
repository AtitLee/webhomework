const express =require('express');
const router = express.Router();
const path = require('path');
const { getProduct } = require('./admin');

router.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'..','views','index.html'));
})

router.get('/api/products',(req,res) => {
    const products = getProduct();
    res.json(products);
})

router.get('/cart',(req,res) => {
    res.sendFile(path.join(__dirname,'..','views','cart.html'))
})

router.get('/checkout',(req,res) => {
    res.sendFile(path.join(__dirname,'..','views','checkout.html'))
})

module.exports = router;