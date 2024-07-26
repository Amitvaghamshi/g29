const express=require("express");
const fs=require("fs");
const cors = require('cors');

let app=express();
app.use(cors()); //HANDLING CORS ERR
app.use(express.json()); // MIDDLEWARE

app.get("/todos",(req,res)=>{
    let data= fs.readFileSync("./db.json","utf-8");
    let parsed_data=JSON.parse(data);
    res.send(parsed_data.todos);
})

app.post("/todos/add",(req,res)=>{
    let todo=req.body;
    let data=fs.readFileSync("./db.json","utf-8");
    let parsed_data=JSON.parse(data);
    let all_todos=parsed_data.todos;
    all_todos.push(todo);
    parsed_data.todos=all_todos;
    fs.writeFileSync("./db.json",JSON.stringify(parsed_data));
    
    res.statusCode=202;
    res.send("DATA SAVED");
})

app.delete("/todos/:id",(req,res)=>{
     let todo_id=req.params.id;
     console.log(todo_id);

     let data=fs.readFileSync("./db.json","utf-8");
     let parsed_data=JSON.parse(data);
     let all_todos=parsed_data.todos;
     let new_data=all_todos.filter((el)=>{
         if(el.id==todo_id){
            return false;
         }
         return true;
     });
     parsed_data.todos=new_data;
     fs.writeFileSync("./db.json",JSON.stringify(parsed_data));

     res.send("DATA DELETED");
})

app.put("/toggle/:id",(req,res)=>{
     let todo_id=req.params.id;
     let data=fs.readFileSync("./db.json","utf-8");
     let parsed_data=JSON.parse(data);
     let all_todos=parsed_data.todos;
     let new_todos=all_todos.map((el)=>{
          if(el.id==todo_id){
              el.isCompleted= !el.isCompleted;
              return el;
          }
          return el;
     });
     parsed_data.todos=new_todos;
     fs.writeFileSync("./db.json",JSON.stringify(parsed_data));

     res.send("DATA UPDATED");
})


app.listen(5000,()=>{
    console.log("SERVER IS STARTED ON PORT 5000");
})



























