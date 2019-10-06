import React, { Component } from 'react';
import AddToDoForm from './AddToDoForm.jsx';
class ToDoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
           list: [],
        };

        this.addToDo = this.addToDo.bind(this);

    }

    addToDo(toDoItem) {
        let list = this.state.list;
        list.push(toDoItem);
        this.setState( {
            list: list
        })
        console.log('New item added to list ', list );
    }

    componentDidMount() {

    }
    
  render() {
    return (
      <div className='toDoList'>
        <AddToDoForm />
      </div>
    );
  }
}

export default ToDoList;