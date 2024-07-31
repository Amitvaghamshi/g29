const express=require("express");
const multer  = require('multer');
const path=require("path");

let storage=multer.diskStorage({
    destination:function(req, file, cb){
        return cb(null,"uploads/");
    },
    filename:function(req, file, cb){
        let fn=file.fieldname +" "+Math.random() +" "+path.extname(file.originalname);
        return cb(null,fn);
    }
});
const upload = multer({ storage :storage});
let app=express();

app.post("/uploadfile",upload.single("FILE") ,(req,res)=>{
    res.send("FILE SAVED");
})

app.get("/",(req,res)=>{
    res.send("This is home page");
})

app.get("/savefile",(req,res)=>{
      res.sendFile(path.join(__dirname ,"/public/index.html"));
})

app.listen(3000,()=>{
    console.log("SERVER IS RUNNING ON PORT 3000");
})