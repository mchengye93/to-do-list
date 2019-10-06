import React, { Component } from 'react';

class AddToDoForm extends Component {
  constructor(props) {
      super(props);

      this.state ={
          toDo: '',
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
      console.log('handle input change');
      
  }
  addToDo(event){
      event.preventDefault();
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
        <input type="submit" value="Add" onClick={this.addToDo}/>
    </form>
    );
  }
}

export default AddToDoForm;