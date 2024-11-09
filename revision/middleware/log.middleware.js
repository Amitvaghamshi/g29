const logger=(req,res,next)=>{
    let msg=req.method+" request is made on url "+req.url+" on time "+(new Date())+"\n";
    fs.appendFileSync("./log.txt",msg);
    next();
;}

module.exports={logger};