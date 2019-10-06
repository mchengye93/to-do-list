import React, { Component } from 'react';

class AddToDoForm extends Component {
  constructor() {
      this.state ={
          toDo: ''
      }
      this.handleInputChange = this.handleInputChange.bind(this);
      this.addToDo = this.addToDo.bind(this);
  }
  handleInputChange(event){
      const target = event.target;
      const value = target.value;
      const name = target.name;
      this.setState( {
          [name]: value
      })
      
  }
  addToDo(event){
      if(this.state.toDo.length) {
        this.props.addToDo(this.state.ToDo);
      } else{
          alert("Please input to do!");
      }
      
  }

  render() {
    return (
    <form>
        <input type="text" name="toDo" value={this.state.toDo} onChange={this.handleInputChange}/>
        <input type="submit" value="Add" onSubmit={this.addToDo}/>
    </form>
    );
  }
}

export default AddToDoForm;