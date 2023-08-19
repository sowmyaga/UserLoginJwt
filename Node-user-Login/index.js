const express=require('express');
const connection=require("./data/connection");
const Router=require('./data/route');
const cors=require('cors');
const app=express();
const port=3001
connection();
app.use('/api',Router);
app.use(cors,express.json());

app.listen(port,()=>{
    console.log(`server listening to port ${port}`)
})