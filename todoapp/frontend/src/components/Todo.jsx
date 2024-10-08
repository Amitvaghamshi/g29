import React from "react";
import SingleTodo from "./SingleTodo";
import AddTodo from "./AddTodo";

function Todo(){
    let [todos,setTodos]=React.useState([]);

    async function fetchData(){
       let res=await fetch("http://localhost:5000/todos");
       let data=await res.json();
       setTodos(data);
    }

    React.useEffect(()=>{
        fetchData();
    },[])

    return (<div> 
        <AddTodo fetchData={fetchData} />
        {
             todos.map((el)=>{
                return (
                    <SingleTodo  id={el.id} todo={el.todo} isCompleted={el.isCompleted} fetchData={fetchData} />
                )
             })
        }
    </div>)
}

export default Todo;