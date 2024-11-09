const mongoose=require("mongoose");

const todosSchema=mongoose.Schema({
     todo:String,
     isCompleted:Boolean,
     timeStamp:Date
})

const TodosModel=mongoose.model("todo",todosSchema);
module.exports={TodosModel};