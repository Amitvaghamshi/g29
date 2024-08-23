const express=require("express");
const {connection}=require("./config/db.js");
const {studentRouter}=require("./routes/student.router.js");
require('dotenv').config()
const {UserModel}=require("./models/user.model.js");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');




const app=express();
app.use(express.json());


app.use("/students",studentRouter);


app.get("/data",(req,res)=>{
     // const {token}=req.params;
      const token=req.headers.authorization;
      //console.log(req.headers);
      try{
        jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
               if(decoded){
                  res.send("This is data");
               }else{
                res.send("Login first");
               }
        });
      }catch(err){
          res.send("Login first");
      }
})

app.post("/user/sigin", async(req,res)=>{
    const {email ,password} =req.body;
    try{
       const user= await UserModel.find({email});
       if(user.length>0){
        bcrypt.compare(password, user[0].password, function(err, result) {
                  if(result){
                    var token = jwt.sign({ class: 'g29' }, process.env.SECRET_KEY, { expiresIn: 40 });
                    res.send({message:"Login success",token:token});
                  }else{
                    res.send("Wrong password");
                  }
        });
       }else{
        res.send("Wrong Emial id");
       }
    }catch(err){
        res.send("something went wrong");
    }
})


app.post("/user/ragister",async (req,res)=>{
      const {name,email,password,mobile}=req.body;
      try{ 
        bcrypt.hash(password, 5, async (err, hash)=> {
          const user=new UserModel({name,email,password:hash,mobile});
          await user.save();
          res.send("user info saved");
        }); 
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