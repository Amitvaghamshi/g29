const {StudentModel}=require("../model/student.model.js");

const getAllStudents=async(req,res)=>{
    try{
        let data=await StudentModel.find();
        res.send(data);
    }catch(err){
        res.send("something went wrong");
    }
}

const addStudent=async (req,res)=>{
    let payload=req.body;
    try{
        let student=new StudentModel(payload);
        await student.save();
        res.send("student saved");
    }catch(err){
        res.send("something went wrong");
    }

}

const deleteStudent=async(req,res)=>{
     try{
        let id=req.params.id;
        let student=await StudentModel.findByIdAndDelete({_id:id});
        res.send(student);
     }catch(err){
        res.status=504;
        res.send("Something went wrong");
     }
};

const graceMarks=async(req,res)=>{
    const {id,marks}=req.query;
    try{
        let student=await StudentModel.findOne({_id:id});
        student.marks=student.marks+ (+marks);
       // await StudentModel.findOneAndUpdate({_id:id},student);
        await student.save();
     //   console.log(student);
        res.send(student);
    }catch(err){

        res.send("something went wrong");
    }
}

module.exports={getAllStudents,addStudent,deleteStudent,graceMarks};