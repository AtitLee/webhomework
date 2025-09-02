const express = require('express');
const path = require('path');
const PORT = 3000;

const app = express();

const shopRouter = require('./routes/shop')
const adminRouter = require('./routes/admin').router

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',shopRouter);
app.use('/admin',adminRouter);

app.use((req,res) =>{
    res.status(404).sendFile(path.join(__dirname,'views','404Page.html'));
})

app.listen(PORT,() =>{
    console.log(`Server is runing on PORT ${PORT}`);
})
