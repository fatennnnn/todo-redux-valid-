import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form/Form';
import ToDoList from './components/ToDoList/ToDoList';
function App() {
  return (
    <div className="App">
         <Form />
      <ToDoList />
    </div>
  );
}

export default App;
