const express = require('express');

const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log("Running Successfully");
})

app.get('/',(req,res)=>{
    res.send('I am running Here');
})


const dbConnect = require('./config/database');
dbConnect();