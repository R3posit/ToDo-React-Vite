import { useState } from 'react'
import './App.css'
import TODOCreate from './components/TODOCreate';
import TodoList from './components/TodoList'

function App() {
  
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
     setTodos([...todos, newTodo])
  }

  const removeTodo = ( todoId ) => {
    setTodos([...todos.filter((todo) => todo.id!==todoId)]);
  }

  const updateTodo = (newTodo) => {
  const updatedTodos =  todos.map((todo) => {
      if(todo.id!==newTodo.id) {
        return todo;
      }
      return newTodo;
    }) 

    setTodos([...updatedTodos])
  }

  
  return (
    <div className='App'>
      <div className='main'>
          <TODOCreate onCreateTodo = {createTodo}/>
          <TodoList todos={todos} onRemoveTodo = {removeTodo} onUpdateTodo = {updateTodo}/>
      </div>
    </div>
  )
}

export default App
