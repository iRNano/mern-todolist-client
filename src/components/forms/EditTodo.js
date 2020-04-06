import React, {useState} from "react"

const EditTodo = ({todo, editTodo,setEditing}) => {

    const [newTodo, setNewTodo] = useState({
        id: todo._id,
        name: todo.name
    })
    return(
        <div>
            <input
                type="text"
                name="name"
                value={newTodo.name}
                onChange={(e)=>setNewTodo({...newTodo, name: e.target.value})}
            />
            <button onClick={()=>{editTodo(newTodo) 
                setEditing(false)}}>Submit</button>
            {/* <button>Cancel</button> */}
        </div>
    )
}

export default EditTodo;