import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoListItem from './TodoListItem';
import { fetchTodos } from '../store/todosSlice';


export default function ListTodo({ isSearched, searchState }) {
  const { todos, status, error } = useSelector((state) => state);
  // console.log('1 todos in listTodo', todos);

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log('2 in useEffect')
    dispatch(fetchTodos())
  }, []);
    if (status === 'loading'|| status === 'null') {
      return <h2 className="loading">Loading...</h2>
    } else if (error) {
      return <h2 className="error">Error: {error}</h2>
    }
    // { status === 'loading' && <h2 className="loading">Loading...</h2> }
    // { error && <h2 className="error">Error: {error}</h2> }


    // console.log('4 todos', todos)
    if (isSearched) {
      return (
        <div className="wrapper-todo-list">
          <h2 className="todo-list-title">My ToDo</h2>
          <ul className="todo-list">
            {searchState.map(todo => {
              return <TodoListItem key={todo.id} todo={todo} />
            })}
          </ul>
        </div>
      )
    }
    return (
      <div className="wrapper-todo-list">
        <h2 className="todo-list-title">My ToDo</h2>
        <ul className="todo-list">
          {todos.map(todo => {
            return <TodoListItem key={todo.id} todo={todo} />
          })}
        </ul>
      </div>
    )

}
