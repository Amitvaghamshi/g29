let mongoose =require("mongoose");

const main=async()=>{
    try{
        const connection=await  mongoose.connect("mongodb://127.0.0.1:27017/ABCD");
        console.log("connecting to mongodb");
        await StudentModel.insertMany([{name:"Amit",roll:12,is_married:false}]);
        console.log("data saved");
        
    }catch(err){
        console.log("!!ERRRRRRR");
        console.log(err);
    }
   
}

main();


let studentSchema=mongoose.Schema({
    name:String,
    roll:Number,
    is_married:Boolean
});

let StudentModel=mongoose.model("student",studentSchema);