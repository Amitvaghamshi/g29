let express=require("express");

let todosRouter=express.Router();

todosRouter.get("/",(req,res)=>{
    res.send("THIS IS ALL TODOS");
})

todosRouter.get("/1",(req,res)=>{
    res.send("THIS IS TODO WITH ID 1");
})

todosRouter.post("/post",(req,res)=>{
    res.send("SAVED");
})

module.exports={todosRouter};

