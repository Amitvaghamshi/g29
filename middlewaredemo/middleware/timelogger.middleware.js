let timeLogger=(req,res,next)=>{
    let startingTime=new Date();
    next();
    let endingTime=new Date();
    console.log(endingTime-startingTime);
};
module.exports= {timeLogger};