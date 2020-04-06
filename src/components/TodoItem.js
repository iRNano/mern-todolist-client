import React,{Fragment, useState} from "react"
import EditTodo from "./forms/EditTodo"

const TodoItem = ({todo, completeTodo, deleteTodo,editTodo}) => {
    const [editing, setEditing] = useState(false)
    let completedStyle ={
        textDecoration: "line-through",
        color: "#eee",
        fontStyle: "italic"
    }
    return(        
        <li style={todo.isCompleted? completedStyle : null}>
            {/* {todo.name} */}
            {editing? <EditTodo todo={todo} editTodo={editTodo} setEditing={setEditing}/> : todo.name}
            {todo.isCompleted? null:
                <Fragment>
                    <button onClick={()=>completeTodo(todo._id)}>Complete</button>
                    <button onClick={()=>setEditing(!editing)}>Edit</button>
                    <button onClick={()=>deleteTodo(todo._id)}>Delete</button>
                </Fragment>
            }

            
        </li>        
    )
}

export default TodoItem;