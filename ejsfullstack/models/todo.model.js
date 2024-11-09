const mongoose=require("mongoose");

const todosSchema=mongoose.Schema({
    name:String
})

const TodosModel=mongoose.model("todo",todosSchema);

module.exports={TodosModel};