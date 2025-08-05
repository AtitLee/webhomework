const express = require("express")
const app = express()
const PORT = 3000

let products =[
    {id:1 , name: "ปากกา" , price: 25 ,stock: 100},
    {id:2 , name: "สมุดโน๊ต" , price: 40 ,stock: 80},
    {id:3 , name: "ยางลบ" , price: 10 ,stock: 200},
    {id:4 , name: "ดินสอ" , price: 14 ,stock: 250},
];

app.use(express.json())

//GET
app.get("/api/products",(req,res) => {
    res.json(products)
});

app.get("/api/products/:id", (req,res) =>{
    const id = parseInt(req.params.id)

    const product = products.find(p => p.id === id)
    if(product){
        res.json(product)

    } else{
        res.status(404).send("⚠️Product not found")
    }
    
})

app.post("/api/products" ,(req,res) => {
    const newProduct ={
        id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
    }
        products.push(newProduct)
        res.status(201).json(newProduct)
    
})

app.put("/api/products/:id",(req,res) => {
    const id = parseInt(req.params.id)
    const productIndex = products.findIndex(p => p.id === id)

    if(productIndex !== -1){
        const updateProduct ={...products[productIndex], ...req.body};
        products[productIndex] = updateProduct;
        res.json(updateProduct)
    }else {
        res.status(404).send("Product not found")
    }
})

app.delete("/api/products/:id", (req,res) => {
    const id = parseInt(req.params.id)
    const initiallenght = products.length;
    products = products.filter(p => p.id !== id)

    if(products.length < initiallenght){
        res.status(204).send()
    }else {
        res.status(404).send("Product not found")
    }

})

app.listen(PORT ,() => {
    console.log(`Server is running on PORT "http://localhost:${PORT}"`);
    
});