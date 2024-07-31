let express=require("express");

let studentRouter=express.Router();

studentRouter.get("/",(req,res)=>{
    res.send("THIS IS ALL STUDENTS");
})

studentRouter.get("/1",(req,res)=>{
    res.send("THIS IS  STUDENT WITH ID 1");
})

studentRouter.delete("/delete",(req,res)=>{
    res.send("STUDENT IS DELETED");
})

module.exports={studentRouter};