const express=require("express");
const fs=require("fs");
const {timeLogger} =require("./middleware/timelogger.middleware");
const {logger}=require("./middleware/logger.middleware");
let app=express();


//MIDDLEWARE
 app.use(logger);
 app.use(timeLogger );

// app.use((req,res,next)=>{
//     console.log("1");
//     next();
//     console.log("2");
// })
// app.use((req,res,next)=>{
//     console.log("3");
//     next();
//     console.log("4");
// })

app.use(express.static("./public"));

app.get("/",(req,res)=>{
    console.log("This is Home page");
    res.send("This is Home page");
})

app.get("/about",(req,res)=>{
    console.log("THIS IS ABOUT PAGE");
    res.send("This is ABOUT page");
})

app.get("/contact",(req,res)=>{
    res.send("This is CONTACT page");
})

app.listen(3000,()=>{
    console.log("SERVER IS RUNNING ON PORT 3000");
})