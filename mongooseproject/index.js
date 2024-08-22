const express=require("express");
const {connection}=require("./config/db.js");
const {studentRouter}=require("./routes/student.router.js");
require('dotenv').config()
const {UserModel}=require("./models/user.model.js");


const app=express();
app.use(express.json());


app.use("/students",studentRouter);


app.get("/data",(req,res)=>{
     // const {token}=req.params;
      const token=req.headers.authorization;
      //console.log(req.headers);
      if(token=="abcd"){
        res.send("THIS IS DATA");
      }else{
        res.send("INVALID TOKEN");
      }
})

app.post("/user/sigin", async(req,res)=>{
    const {email ,password} =req.body;
    try{
       const user= await UserModel.find({email,password});
       if(user.length>0){
         res.send({message:"Login success",token:"abcd"});
       }else{
        res.send("Wrong credentials");
       }
    }catch(err){
        res.send("something went wrong");
    }
})


app.post("/user/ragister",async (req,res)=>{
      const payload=req.body;
      try{
         const user=new UserModel(payload);
         await user.save();
         res.send("user info saved");
      }catch(err){
        console.log(err);
        res.send("SOMETHING WENT WRONG");
      }
})



app.get("/",(req,res)=>{
    res.send("This is Home page");
})

app.get("*",(req,res,next)=>{
      //res.send({message:"INVALID URL",status:"ERROR"});
      let err=new Error("INVALID URL");
      err.statusCode=404;
      next(err);
})

app.use((err,req,res,next)=>{
    
      res.status(err.statusCode).json({
           message:err.message
      })
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