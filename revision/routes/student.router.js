const express=require("express");
const studentRouter=express.Router();
const {StudentModel}=require("../model/student.model.js");
const {getAllStudents,addStudent,deleteStudent,graceMarks}=require("../controller/student.controller.js");

studentRouter.get("/all",getAllStudents)
studentRouter.post("/save", addStudent  );
studentRouter.delete("/delete/:id",  deleteStudent   );
studentRouter.patch("/gracemarks",graceMarks )

module.exports={studentRouter};