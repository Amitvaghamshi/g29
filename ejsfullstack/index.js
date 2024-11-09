const express=require("express");
const app=express();
const {connection}=require("./config/db.js");
const {todoRouter}=require("./routes/todo.roter.js");

app.set('view engine', 'ejs');
app.use(express.json());
var bodyParser = require('body-parser')

app.use("/todos",todoRouter);

app.use(bodyParser.urlencoded({ extended: false }))

app.listen(3000,async ()=>{
    try{
       await connection
       console.log("connected to db");
    }catch(err){

        console.log("err to connecting db");
    }
    console.log("server is started on port 3000");
})