const express = require('express')
const path = require('path');

const app = express()

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res) => {
    res.sendFile(path.join(__dirname ,"views","404.html"))
});
app.listen(3000);