
import './App.css';
import ControllerTodo from './components/ControllerTodo';
import ListTodo from './components/ListTodo';
import { useState } from 'react';


export default function App() {

  const [count, setCount] = useState('');

  const showCount = (value) => {
    setCount(value)
  }

  return (
    <>
      <div className="wrapper">
        <h1 className="todo-title">What needs to be done?</h1>
        <ControllerTodo showCount={showCount} count={count} />
        <ListTodo count={count} />
      </div>
    </>
  );
}
