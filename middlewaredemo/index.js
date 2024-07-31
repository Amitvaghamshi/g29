const express=require("express");
const fs=require("fs");
const {timeLogger} =require("./middleware/timelogger.middleware");
const {logger}=require("./middleware/logger.middleware");
const {todosRouter} =require("./router/todos.router");
const {studentRouter}=require("./router/students.router");

let app=express();
let path=require("path");

//MIDDLEWARE
//  app.use(logger);
//  app.use(timeLogger );

app.use(express.static(path.join(__dirname,"/public")));
app.use("/todos",todosRouter);
app.use("/student",studentRouter);

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


// app.get("/home",(req,res)=>{
//     console.log("This is Home page");
//     res.send("This is Home page");
// })

// app.get("/about",(req,res)=>{
//     console.log("THIS IS ABOUT PAGE");
//     res.send("This is ABOUT page");
// })

// app.get("/contact",(req,res)=>{
//     res.send("This is CONTACT page");
// })

// app.get("/static",(req,res)=>{
//      res.sendFile(path.join(__dirname,"/public/index.html"));
// })





app.listen(3000,()=>{
    console.log("SERVER IS RUNNING ON PORT 3000");
})