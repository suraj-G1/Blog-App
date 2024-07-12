const express = require('express');

const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const blog = require('./routes/blog');

app.use('/api/v1', blog);

const dbConnect = require('./config/database');
dbConnect();

app.listen(PORT,()=>{
    console.log("Running Successfully");
})

app.get('/',(req,res)=>{
    res.send('<h1>Shabbas Beta , bohot badiya </h1>');
})