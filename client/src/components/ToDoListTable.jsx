import React, { Component } from 'react';
class ToDoListTable extends Component {

    render() {

        const toDoList = this.props.list;
        const toDoItems = toDoList.map((toDoItem) =>
        <tr>
            <td><input type="checkbox"/></td>
            <td>{toDoItem}</td>
        </tr>
        );
      return (
        <table className="toDoListTable">
            {toDoItems}
        </table>
      );
    }
  }
  
  export default ToDoListTable;