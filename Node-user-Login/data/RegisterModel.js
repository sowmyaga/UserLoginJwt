const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    username:String,
    email:String,
    gender:String,
    password:String
})

module.exports=mongoose.model('UserRegister',schema)