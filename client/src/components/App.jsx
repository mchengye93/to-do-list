import React, { Component } from 'react';
import ToDoList from './ToDoList.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <h2>To Do List App</h2>
        <ToDoList/>
      </div>
    );
  }
}

export default App;