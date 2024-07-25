const express=require("express");
const cowsay = require("cowsay");
const fs=require("fs");

let app=express();

app.use(express.json());  // MIDDLEWARE

app.get("/",(req,res)=>{
    res.send("THIS IS HOME PAGE");
})

app.get("/data",(req,res)=>{
      res.end("THIS IS DATA");
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

app.get("/students",(req,res)=>{
     let data=fs.readFileSync("./db.json","utf-8");
     let parsed_data=JSON.parse(data);
    
     res.send(parsed_data.students);
})

app.get("/students/:name",(req,res)=>{
    let name=req.params.name;
    let data=fs.readFileSync("./db.json","utf-8");
    let parsed_data=JSON.parse(data);
    let allStudents=parsed_data.students;
    let new_data=allStudents.filter((el)=>{
        if(el.name==name){
            return true;
        }
        return false;
    });
    res.send(new_data);
})

app.post("/student/save",(req,res)=>{
     let student=req.body;

     let data=fs.readFileSync("./db.json","utf-8");
     let parsed_data=JSON.parse(data);
     let allStudents=parsed_data.students;
     allStudents.push(student);
     parsed_data.students=allStudents;
     fs.writeFileSync("./db.json",JSON.stringify(parsed_data));

     res.statusCode=202;
     res.send("DATA SAVED");
});


app.listen(3000,()=>{
    console.log("SERVER IS STARTED ON PORT 3000");
});

