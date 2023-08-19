const express=require('express');
const controller=require("../data/RegisterController");

const Router=express.Router();

Router.get('/getUser',controller.getRegisterUser);

module.exports=Router;