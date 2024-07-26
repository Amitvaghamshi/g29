function SingleTodo({id,todo,isCompleted}){
     return (
        <div style={{border:"1px solid green",padding:"15px"}} >
                    <h2>{todo}</h2>
                    <button style={{marginRight:"20px"}} >{isCompleted?"COMPLETD":"NOT COMPLETED"}</button>
                    <button>DELETE</button>
        </div>
     )
}

export default SingleTodo;