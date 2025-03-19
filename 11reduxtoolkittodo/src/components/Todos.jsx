import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const [editTodoId, setEditTodoId] = useState(null)

    const handleUpdate = (id) => {
      setEditTodoId(id)
    }

    const saveUpdate = (id, newtext) => {
      dispatch(updateTodo({id, text: newtext}))
      setEditTodoId(null);
    }
  return (
    <>
    <div className='flex justify-center items-center'>
      <div className='p-2 border-1 shadow-lg border-solid rounded-lg w-25'>
        <div className='text-2xl'>Todos</div>
      </div>
    </div>
    
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            { editTodoId === todo.id ? (
              <input
                className='text-white px-2 py-1 rounded'
                defaultValue={todo.text}
                //onBlur={(e) => saveUpdate(todo.id, e.target.value)}
                onKeyDown={(e) => {
                  if(e.key === "Enter") 
                    saveUpdate(todo.id, e.target.value);
                }}
              />
            ) : (
              <div className='text-white'>{todo.text}</div>
            )}
            <div className='flex gap-x-3'>
              {editTodoId === todo.id ? (
                <button
                  onClick={() => setEditTodoId(null)}
                  className='text-white bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-md'>
                  Save
                </button>
              ) : (
                <button 
                onClick={() => handleUpdate(todo.id)}
                className='text-white bg-yellow-400 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-500 rounded text-md'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 3.487a2.25 2.25 0 1 1 3.182 3.182L6.75 19.963l-4.5 1.125 1.125-4.5L16.862 3.487z"
                  />
                </svg>
              </button>
              )}
              
              <button
              onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos