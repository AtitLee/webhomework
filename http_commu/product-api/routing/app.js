const express = require('express')
const path = require('path');

const app = express()
app.set('view engine','pug');
app.set('views','views');

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));

app.use('/admin',adminData.routes);
app.use(shopRoutes);

app.use((req,res) => {
    res.status(404).render('404');
});
app.listen(3000);