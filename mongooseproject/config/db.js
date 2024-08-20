// let mongoose =require("mongoose");

// const main=async()=>{
//     try{
//         const connection=await  mongoose.connect("mongodb://127.0.0.1:27017/ABCD");
//         console.log("connecting to mongodb");
//       // await StudentModel.insertMany([{name:"munnu",roll:12,is_married:false}]);
//         let student=new StudentModel({
//             name:"Divyesh",
//         });
//         await student.save();
//         console.log("data saved");

//         // let data=await StudentModel.find({roll:12});
//         // console.log(data)

        
//         mongoose.disconnect();
//     }catch(err){
//         console.log("!!ERRRRRRR");
//         console.log(err);
//     }
// }

// main();


// let studentSchema=mongoose.Schema({
//     name:String,
//     roll:{type:Number , required :true},
//     is_married:Boolean
// },{
//     versionKey:false
// }  );

// let StudentModel=mongoose.model("student",studentSchema);

const mongoose=require("mongoose");
const connection=mongoose.connect("mongodb://127.0.0.1:27017/infodb");

module.exports={connection};