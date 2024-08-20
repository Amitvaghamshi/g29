const express=require("express");
const {connection}=require("./config/db.js");
const {StudentModel}=require("./models/student.model.js");
const {studentRouter}=require("./routes/student.router.js");

const app=express();
app.use(express.json());

app.use("/students",studentRouter);

app.get("/",(req,res)=>{
    res.send("This is Home page");
})


app.listen(3000,async()=>{
    try{
       await connection;
       console.log("connected to db");
    }catch(err){
        console.log("err to connecting db");
    }
    console.log("server is started on some port 3000");
})