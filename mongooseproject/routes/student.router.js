const express=require("express");
const studentRouter=express.Router();
const {StudentModel}=require("../models/student.model.js");

studentRouter.post("/add",async(req,res)=>{
    const payload=req.body;
    try{
         const student=new StudentModel(payload);
         await student.save();
         res.send("Student info saved");
    }catch(err){
      console.log(err);
      res.send("something went wrong");
    }
})

studentRouter.get("/",async (req,res)=>{
  try{
      let data=await StudentModel.find();
      res.send(data);
  }catch(err){
      res.send("something went wrong");
  }
})

studentRouter.delete("/delete/:id", async(req,res)=>{
  const id=req.params.id;
  try{
      await StudentModel.findByIdAndDelete({_id:id});
      res.send("student deleted");
  }catch(err){
      res.send("something went wrong");
  }
    
})

module.exports={studentRouter};