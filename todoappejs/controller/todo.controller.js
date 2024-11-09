const getAllTodos=async(req,res)=>{
    try{
        let data=await TodosModel.find();
        res.render("index",{data});
    }catch(err){
        res.redirect("err");
    }
};

const addTodo=(req,res)=>{
    res.render("addtodo",{});
};

const createTodo=async(req,res)=>{
    const {todoname}=req.body;
    try{
       let todo=new TodosModel({todo:todoname,isCompleted:false});
       await todo.save();
       res.redirect("/todos");
    }catch(err){
         res.render("err",{});
    }
    
};

const deleteTodo=async(req,res)=>{
    const {id}=req.params;
    try{
       await TodosModel.findByIdAndDelete(id);
       res.redirect("/todos")
    }catch(err){
      res.render("err",{});
    }
};

const toggle=async(req,res)=>{
    const {id}=req.params;
    try{
        await TodosModel.findByIdAndUpdate(id,{isCompleted:true});
        res.redirect("/todos");
    }catch(err){
        res.render("err");
    }   
};

module.exports={getAllTodos,addTodo,createTodo,deleteTodo,toggle}