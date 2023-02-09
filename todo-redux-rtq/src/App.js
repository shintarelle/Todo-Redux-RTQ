
import './App.css';
import ControllerTodo from './components/ControllerTodo';
import ListTodo from './components/ListTodo';
import { useState } from 'react';


export default function App() {
  const [isSearched, setSearched] = useState(false);
  const [searchState, setSearchState] = useState([]);

  const renderSearch = (searchState) => {
    setSearched(true)
    setSearchState(searchState)
  }
  const updateTodo = () => {
    setSearched(false)
  }

  return (
    <>
      <div className="wrapper">
        <h1 className="todo-title">What needs to be done?</h1>
      <ControllerTodo renderSearch={renderSearch} updateTodo={updateTodo} />
      <ListTodo isSearched={isSearched} searchState={searchState} />
      </div>
    </>
  );
}
