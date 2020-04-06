import React, { useEffect, useState } from 'react';
import TodoItem from "./components/TodoItem"
import AddTodo from "./components/forms/AddTodo"

function App() {
  const[todos,setTodos] = useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/todos")
    .then(res => res.json())
    .then(data => {
      setTodos(data)
    })
  },[todos])

  // console.log(todos)
  //add todo

  const addTodo = (todo) => {
    // alert("This is the add todo function")
    // console.log(todo)
    fetch("http://localhost:4000/todos", {
      method: "POST",
      body: JSON.stringify(todo),
      headers:{
        "Content-Type": "application/json"
      }
    })
    .then(res=> res.json())
    .then(data => {
      console.log(data)
    })
  }

  //complete todo

  const completeTodo = (id) =>{
    fetch(`http://localhost:4000/todos/${id}`, {
      method: "PATCH"
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
  }

  //delete todo

  const deleteTodo = (id) => {
    let result =window.confirm("Are you sure you want to delete this todo?")
    if(result) {
      fetch(`http://localhost:4000/todos/${id}`, {
        method: "DELETE"
      })
      .then(res=>res.json())
      .then(data=>console.log(data))
    }
    
  }

  //edit todo

  const editTodo = (newTodo) => {
    // console.log(id + name)
    fetch(`http://localhost:4000/todos/${newTodo.id}`, {
      method: "PUT",
      body: JSON.stringify(newTodo),
      headers:{
        "Content-Type": "application/json"
      }
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
  }
  //show all todo
  const allTodos = todos.map(todo=> 
  //TodoItem props
  <TodoItem 
    key={todo._id} 
    todo={todo} 
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    editTodo={editTodo}
  /> )
  

  //return
  return (
    <div className="App">
        <AddTodo addTodo={addTodo} />
        {allTodos}
    </div>
  );
}

export default App;
