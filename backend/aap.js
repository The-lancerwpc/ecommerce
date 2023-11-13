const express= require('express');
const aap=express();
aap.use(express.json());
//import routes
const products = require('./routes/product');

aap.use('/api/v1',products)
module.exports=aap

