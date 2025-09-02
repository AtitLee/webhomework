const express = require("express")
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');

const adminData = require('./admin');

router.get('/', (req,res,next) =>{
    const products  = adminData.products;
    // console.log("hello world,Always");
    console.log(products);
    res.render('shop',{prods: products, pageTitle: "Myshop mak mak",path :'/'});
});

router.post("/remove-product", (req, res) => {
  console.log("ID ที่ส่งมาลบ:", req.body.id); // ตรวจสอบ
  const products = require("./admin").products;
  const index = products.findIndex((p) => p.id === req.body.id);
  if (index !== -1) {
    products.splice(index, 1);
    console.log("ลบสินค้าเรียบร้อย");
  } else {
    console.log("ไม่พบสินค้า");
  }
  res.redirect("/");
});
module.exports = router;