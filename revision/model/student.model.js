const mongoose=require("mongoose");

const studentSchema=mongoose.Schema({
    name:String,
    roll:Number,
    year:Number,
    marks:Number
});

const StudentModel=mongoose.model("student",studentSchema);

module.exports={StudentModel}