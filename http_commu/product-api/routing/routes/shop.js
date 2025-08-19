const express = require("express")
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');

const adminData = require('./admin');

router.get('/', (req,res,next) =>{
    // console.log("hello world,Always");
    console.log(adminData.products);
    res.render('shop',{prods: adminData.products, pageTitle: "Myshop mak mak"});
});

module.exports = router;