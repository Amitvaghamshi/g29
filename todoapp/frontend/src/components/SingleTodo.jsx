function SingleTodo({id,todo,isCompleted,fetchData}){
     return (
        <div style={{border:"1px solid green",padding:"15px"}} >
                    <h2>{todo}</h2>

                    <button  onClick={()=>{
                         fetch(`http://localhost:5000/toggle/${id}`,{
                           //  http://localhost:5000/toggle?id=${id}`
                               method:"PUT"
                            }).then((res)=>res.text())
                            .then((data)=>{
                                console.log(data);
                                fetchData();
                            }).catch((err)=>{
                              console.log(err);
                            })
                    }}  style={{marginRight:"20px"}} >{isCompleted?"COMPLETD":"NOT COMPLETED"}</button>

                    <button onClick={()=>{
                       fetch(`http://localhost:5000/todos/${id}`,{
                      //  http://localhost:5000/todos?id=${id}`
                          method:"DELETE"
                       }).then((res)=>res.text())
                       .then((data)=>{
                           console.log(data);
                           fetchData();
                       }).catch((err)=>{
                         console.log(err);
                       })

                    }} >DELETE</button>
        </div>
     )
}

export default SingleTodo;