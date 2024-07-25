const http=require("http")
const fs=require("fs");

let server=http.createServer((req,res)=>{
        if(req.url=="/"){
            res.end("THIS IS HOME PAGE");
        }else if(req.url=="/about"){
            res.end("THIS IS ABOUT PAGE");
        }else if(req.url=="/contact"){
            res.end("<h1>THIS IS CONTACT PAGE</h1>");
        }else if(req.url=="/data"){
             fs.readFile("./db.json","utf-8",(err,data)=>{
                   if(err){
                      res.end("SOMETHING WENT WRONG!");
                   }else{
                     res.end(data);
                   }
             })
        }else if(req.url=="/save" && req.method=="POST"){   
            let str="";
             req.on("data",(chunk)=>{
                str+=chunk;
             })
             req.on("end",()=>{
                console.log(str);
             })

             res.end("DATA SAVED");
        }else if(req.url=="/movie"){
             //NORMAL CASE
            //  let data=fs.readFileSync("./movie.txt","utf-8");
            //  res.end(data);


            // STREAM 
            let movieStream=fs.createReadStream("./movie.txt","utf-8");
            movieStream.pipe(res);

        }
        else{
            res.end("INVALID URL!!");
        }
})

server.listen(3000,()=>{
    console.log("SERVER IS RUNNING ON PORT 3000");
})