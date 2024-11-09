const express=require("express");
const {TodosModel}=require("../models/todo.model.js");

const todoRouter=express.Router();

todoRouter.get("/",async(req,res)=>{
     try{
        const data=await TodosModel.find();
        // console.log(data);
        res.render("index",{data});
     }catch(err){
        res.render("err");
     }
   
})

todoRouter.get("/add",(req,res)=>{
    res.render("add");
})

todoRouter.post("/create",async(req,res)=>{
     const {name}= req.body;
     console.log(req.body);
      try{
        let todo=new TodosModel({name});
        await  todo.save();
        res.redirect("/todos");
      }catch(err){
        console.log(err);
        res.render("err");
      }
})

module.exports={todoRouter};