import React, { useEffect, useState } from 'react'
import './ToDoList.css'
const ToDoList = () => {
  const local = JSON.parse(localStorage.getItem('TODOS')||'[]');
  const [todos, setTodos] = useState<string[]>(local)
  const [todo,setTodo] = useState<string>('');

  const handleSubmit = (todo:string)=>{
    setTodos(prev=>[...prev, todo]);
    setTodo('');
  }
  const handleClear = ()=>{
    localStorage.removeItem('TODOS');
    setTodo('');
    setTodos([]);
  }
  const renderTodos = ()=>{
    return todos.map(todo=>{
            return<li>{todo}</li>
  })
  }
  useEffect(()=>{
    localStorage.setItem('TODOS', JSON.stringify(todos))
  },[todos])
  return (
    <div className='todoList-container'>
      <input className='todo-input' type="text" value={todo} placeholder='SET TODO' onChange={e=>setTodo(e.target.value)}/>
      <button className='submit-input' onClick={()=>handleSubmit(todo)}>ADD</button>
      <ul>
        {renderTodos()}
      </ul>
      <button className='clear-button' onClick={handleClear}>Clear</button>
    </div>
  )
}

export default ToDoList
