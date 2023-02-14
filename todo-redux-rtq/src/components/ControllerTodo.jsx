import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, clearTodo, sortByMin, sortByMax } from '../store/todosSlice'
import { useAddTodoMutation } from './TodoApi';




export default function ControllerTodo({showCount, count}) {
  const [text, setText] = useState('');

  const state = useSelector(state => state);
  const dispatch = useDispatch();
  // console.log('state.todos', state.todos)

  const [addTodoQuerry, {isLoading, isError}] = useAddTodoMutation()
  const handleAddTodoQuerry = async () => {
    if (text) {
      await  addTodoQuerry({title: text, completed: false}).unwrap()
      setText('')
    }
  }

  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodo(text))
      setText('')
    }
  }
  const handleClearAll = () => {
    dispatch(clearTodo())
  }

  return (
    <div className='controller'>
      <div className="controller-todo">
        <input className="controller-input" value={text} onChange={(e) => setText(e.target.value)} />
        <button className="btn" onClick={handleAddTodoQuerry}>Add</button>
        {/* <button className="btn" onClick={handleClearAll}>Clear All</button> */}
      </div>
      <div className="controller-select">
        <select  className="select" value={count} onChange={(event) => showCount(event.target.value)}>
          <option value="">all</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    </div>
  );
}
