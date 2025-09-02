const express =require('express');
const { get } = require('http');
const router = express.Router();
const path = require('path');

let products = [
    {
        id: 1,
        name: 'Paraceteamol',
        price: 10,
        stock: 100,
        description: 'ยาแก้ปวดลดไข้',
        imageURL: 'https://tse1.mm.bing.net/th/id/OIP.nonOD-b2nycWhJfsJa1Q3QHaE8?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    {
        id: 2,
        name:'Vitamin C',
        price: 50,
        stock: 200,
        description: 'วิตามินซี',
        imageURL:'https://chiropractie-emmen.nl/wp-content/uploads/2020/06/vitamine-c-scaled.jpg'
    }
]

function getProduct(){
    return products;
}
router.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'..','views','index.html'));
})

router.get('/add-product',(req,res) =>{
    res.sendFile(path.join(__dirname,'..','views','add-product.html'));
})



module.exports ={
    router: router,
    products: products,
    getProduct: getProduct,
}