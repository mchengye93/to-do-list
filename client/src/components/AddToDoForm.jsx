import React, { Component } from 'react';

class AddToDoForm extends Component {
  constructor() {
      this.state ={
          toDo: ''
      }
      this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event){
      const target = event.target;
      const value = target.value;
      const name = target.name;
      this.setState( {
          [name]: value
      })
      
  }
  render() {
    return (
    <form>
        <input type="text" name="toDo" value={this.state.toDo}/>
        <input type="submit" value="Add"/>
    </form>
    );
  }
}

export default AddToDoForm;