import React, { useState } from 'react'
import ToDoList from './ToDoList'

const App = () => {
  
  const [user , setUser] = useState<string>('Rick')
  return (
    
    <ToDoList/>
  )
}

export default App

