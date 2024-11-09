const express=require("express");
const {connection}=require("./config/db.js");
const {studentRouter}=require("./routes/student.router.js");
const fs=require("fs");
const {logger}=require("./middleware/log.middleware.js");

const app=express();
// logger middleware
app.use(logger)

// parse body from req
app.use(express.json());
app.use("/student",studentRouter);

app.get("/",(req,res)=>{ 
    res.send("This is home page");
})

app.listen(3000, async()=>{
    try{
       await connection;
       console.log("connected to db");
    }catch(err){
        console.log("ERROR to connecting db");
    }
    console.log("server is started on port 3000");
})