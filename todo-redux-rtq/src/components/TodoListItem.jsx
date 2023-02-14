import React from 'react';
import { createRef } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {toggleComplete, removeTodo, saveTodo} from '../store/todosSlice'
import { useDeleteTodoMutation } from './TodoApi';


export default function TodoListItem({ todo }) {
  const [isEditable, setEditable] = useState(false)
  const inputRef = createRef();
  const dispatch = useDispatch();

  const [deleteTodoQuerry] = useDeleteTodoMutation();

  const handleChangeCompleted = (e) => {
    dispatch(toggleComplete(e.target.parentNode.id))
  }

  const handleDeleteTodoQuerry = async (e) => {
    await deleteTodoQuerry(e.target.parentNode.id).unwrap();
  }


  const handleSaveTodo = (e) => {
    const value = inputRef.current.value
    console.log(value)
    console.log(e.target.parentNode.id)
    dispatch(saveTodo({ id: e.target.parentNode.id, value: value }))
    setEditable(!isEditable)
  }

  if (isEditable) {
    console.log(inputRef)
    return (
    <li className="todo-item" id={todo.id}>
        <input className="controller-input" defaultValue={todo.title} ref={inputRef} />
        <button className="btn" onClick={(e) => handleSaveTodo(e)}>Save</button>
        <button className="btn" onClick={() => setEditable(!isEditable)}>Cancel</button>
    </li>
  )
  }
  return (
    <li className="todo-item" id={todo.id}>
      {/* <input type="checkbox" checked={todo.completed} onChange={(e) => handleChangeCompleted(e)} /> */}
      <span className="text">{todo.title}</span>
      {/* <button className="btn" onClick={() => setEditable(!isEditable)}>Edit</button> */}
      <button className="btn" onClick={(e) => handleDeleteTodoQuerry(e)}>Remove</button>
    </li>
  )
}
