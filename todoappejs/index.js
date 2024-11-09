const express=require("express");
const {connection}=require("./config/db.js");
const {todoRouter}=require("./routes/todo.router.js");
const bodyParser = require('body-parser');


const app=express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/todos",todoRouter);

app.listen(3000,async ()=>{
      try{
            await connection;
            console.log("connected to db")
      }catch(err){
            console.log("err in connection")
      }
      console.log("server is started on port 3000");
})
