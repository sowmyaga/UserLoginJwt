require('dotenv').config();
const mongoose=require('mongoose');
const db_URL="mongodb://127.0.0.1:27017/mongo?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.4";
const connection=function(){
    mongoose.connect(db_URL).then((value)=>{
        console.log("db connected successfully");
    })
}

module.exports=connection;