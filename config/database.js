const mongoose = require('mongoose');
require('dotenv').config();
const DATABASE_URL = process.env.DATABASE_URL;

const dbConnect = ()=>{
    mongoose.connect(DATABASE_URL,{
        UseNewUrlParser:true,
        UseUnifiedTopology:true,
    }).then(console.log('Successful'))
    .catch((err)=>{
        console.log('Abe Yede , Thik se kar connect');
        console.log(err);
        process.exit(1);
    })
}

module.exports = dbConnect;