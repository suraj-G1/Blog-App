const mongoose = require('mongoose');
require('dotenv').config();
const DATABASE_URL = process.env.DATABASE_URL;

const dbConnect = ()=>{
    mongoose.connect(DATABASE_URL,{
        UseNewUrlParser:true,
        UseUnifiedTopology:true
    }).then(()=>console.log('Successful'))
    .catch((err)=>{
        console.log('Abe Yede , Thik se kar connect');
    })
}

module.exports = dbConnect;