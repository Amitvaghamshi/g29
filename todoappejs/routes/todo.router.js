const express=require("express");
const {TodosModel}=require("../model/todo.model.js");
const {getAllTodos,createTodo,addTodo,deleteTodo,toggle}=require("../controller/todo.controller.js");

const todoRouter=express.Router();

todoRouter.get("/",getAllTodos);
todoRouter.get("/add",addTodo);
todoRouter.post("/create",createTodo)
todoRouter.post("/delete/:id",deleteTodo);
todoRouter.post("/toggle/:id",toggle);

module.exports={todoRouter};