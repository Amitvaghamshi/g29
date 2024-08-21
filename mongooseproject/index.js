const express=require("express");
const {connection}=require("./config/db.js");
const {studentRouter}=require("./routes/student.router.js");
require('dotenv').config()


const app=express();
app.use(express.json());

app.use("/students",studentRouter);

app.get("/",(req,res)=>{
    res.send("This is Home page");
})


app.listen(process.env.PORT,async()=>{
    try{
       await connection;
       console.log("connected to db");
    }catch(err){
        console.log("err to connecting db");
    }
    console.log(`server is started on some port ${process.env.PORT}`);
})