const express = require("express");
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');

const products = [];

router.get("/add-product", (req, res) => {
  // console.log("Add Product Page");
  res.render('add-product',{pageTitle: 'Add Product',path: '/admin/add-product'});
});

// router.post('/add-product',(req,res,next) => {
//   products.push({title: req.body.title,
//     price: req.body.price,
//     description: req.body.description
//   });
//    res.redirect('/')
// })

router.post("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/")
});

router.post("/add-product", (req, res) => {
  const newProduct = {
    id: Date.now().toString(),
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    image: req.body.image
  };
  products.push(newProduct);
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
