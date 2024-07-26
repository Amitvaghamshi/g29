import React from "react";

function AddTodo({fetchData}){

    let [text,setText]=React.useState("");

    return(<div style={{margin:"20px"}} >
        <input value={text} onChange={(e)=>{
            setText(e.target.value);
        }} type="text" />

        <button onClick={()=>{

            let data={
                id:Math.random(),
                todo:text,
                isCompleted:false
            }

            let myheaders=new Headers();
            myheaders.append("Content-Type","application/json");

            fetch("http://localhost:5000/todos/add",{
                method:"POST",
                body:JSON.stringify(data),
                headers:myheaders
            }).then((res)=>res.text())
            .then((data)=>{
                console.log(data);
                fetchData();
            }).catch((err)=>{
                console.log(err);
            })
            
            setText("");
        }} >ADD TODO</button>
    </div>)
}
export default AddTodo;