import { React, useState }from 'react'
import { CiBookmarkRemove } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import '../App.css'
import { FaCheck } from "react-icons/fa";

function Todo({ todo, kerem, onUpdateTodo}) {

  const { id, content } = todo;
  
  const [editable, setEditable] = useState(false);
  const [newTodo, setNewTodo] = useState(content);

  const removeTodo = () => {
    kerem(id);
  }

  const updateTodo = () => {
    const request = {
      id : id,
      content : newTodo 
    } 
    onUpdateTodo(request);
    setEditable(false);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', border: '1px solid lightgrey', padding: '10px', marginTop: '8px'}}>
      <div>
        <div>
           {
            editable ? <input className='todo-input' type='text' value={newTodo} onChange={(a) => setNewTodo(a.target.value)} style={{ width: '380px'}}/> : content
           }
        </div>
      </div>
      <div>
           <CiBookmarkRemove className='todo-icons' onClick={removeTodo}/> 
           {
            editable ? <FaCheck className='todo-icons' onClick={updateTodo}/> : <FaEdit className='todo-icons' onClick={() => setEditable(true)}/>
           }
           
           
      </div>
    </div>
  )
}

export default Todo
