import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, clearTodo, sortByMin, sortByMax, addTodoAsync } from '../store/todosSlice';

export default function ControllerTodo({renderSearch, updateTodo}) {
  const [text, setText] = useState('')
  const [search, searchText] = useState('')
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  // console.log('state.todos', state.todos)

  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodoAsync(text))
      setText('')
    }
  }
  const handleClearAll = () => {
    dispatch(clearTodo())
  }
  const handleSearchTodo = () => {
    const searchState = state.todos.filter(todo => todo.title.includes(search))
    // console.log(searchState)
    renderSearch(searchState)
    searchText('')
  }
  const handleUpdateTodo = () => {
    updateTodo()
  }

  const handleSortByMin = () => {
    dispatch(sortByMin())
  }
  const handleSortByMax = () => {
    dispatch(sortByMax())
  }
  return (
    <div className='controller'>
      <div className="controller-todo">
        <input className="controller-input" value={text} onChange={(e) => setText(e.target.value)} />
        <button className="btn" onClick={handleAddTodo}>Add</button>
        <button className="btn" onClick={handleClearAll}>Clear All</button>
      </div>
      <div className="controller-search">
        <input className="controller-input" value={search} placeholder='seach...' onChange={(e) => searchText(e.target.value)} />
        <button className="btn" onClick={handleSearchTodo}>Search</button>
        <button className="btn" onClick={handleUpdateTodo}>Update</button>
      </div>
      <div className='controller-sort'>Sort:
        <label >
          <input type="radio" name="min-max" onClick={handleSortByMin} />min to max
        </label>
        <label>
          <input type="radio" name="min-max" onClick={handleSortByMax} />max to min
        </label>
      </div>
    </div>
  );
}
