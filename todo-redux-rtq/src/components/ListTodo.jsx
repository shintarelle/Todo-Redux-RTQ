import React, { useEffect } from 'react';
import TodoListItem from './TodoListItem';
import { useGetTodosQuery } from './TodoApi';


export default function ListTodo({ count }) {

  const { data = [], isLoading, isError } = useGetTodosQuery(count);

    if (isLoading) {
      return <h2 className="loading">Loading...</h2>
    } else if (isError) {
      return <h2 className="error">Error: Oops</h2>
    }

    return (
      <div className="wrapper-todo-list">
        <h2 className="todo-list-title">My ToDo</h2>
        <ul className="todo-list">
          {data.map(todo => {
            return <TodoListItem key={todo.id} todo={todo} />
          })}
        </ul>
      </div>
    )

}
