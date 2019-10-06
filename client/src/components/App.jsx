import React, { Component } from 'react';
import ToDoList from './ToDoList.jsx';

class App extends Component {
  render() {
    return (
      <div style={{textAlign:'center'}}>
      <div style={{display:'inline-block'}}>
        <h2>To Do List App</h2>
        <ToDoList/>
        </div>
      </div>
    );
  }
}

export default App;