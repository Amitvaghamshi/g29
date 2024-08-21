const mongoose=require("mongoose");

const studentSchema=mongoose.Schema({
    name:{type:String,required:true},
    age:Number,
    is_married:Boolean
})

const StudentModel=mongoose.model("student",studentSchema);

module.exports={StudentModel}