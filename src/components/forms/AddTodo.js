import React, {useState} from "react"

const AddTodo = ({addTodo}) => {

    const [todo,setTodo] = useState({
        name: ""
    })
    // const onChangeHandler = (e) => {
    //     setTodo(e.target.value)
    // }
    return(
        <div>
            <input 
                type="text" 
                name="name"
                onChange={(e)=> setTodo({name: e.target.value})}
            />
            
            <button onClick={()=>addTodo(todo)}>Submit</button>
        </div>
    )
}

export default AddTodo;