let fs=require("fs");

let logger=(req,res,next)=>{
    let message= `${req.method}  request is made on url ${req.url}  on time ${(new Date())}`;
    fs.appendFileSync("./logger.txt",message+"\n");
    next();
}
module.exports={logger};