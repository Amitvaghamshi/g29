const express=require("express");
const cowsay = require("cowsay");
const fs=require("fs");

let app=express();

app.get("/",(req,res)=>{
    res.send("THIS IS HOME PAGE");
})

app.get("/data",(req,res)=>{
      res.end("THISIS DATA");
})

app.get("/cow",(req,res)=>{
    let cow=cowsay.say({
        text : "I'm a COW",
        e : "Oo",
        T : "-- "
    });
    res.end(cow);
})

app.get("/alldata",(req,res)=>{
    let data= fs.readFileSync("./db.json","utf-8");
    res.send(data);
})

app.listen(3000,()=>{
    console.log("SERVER IS STARTED ON PORT 3000");
});