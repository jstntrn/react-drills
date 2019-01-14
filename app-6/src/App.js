import React, { Component } from 'react';
import Todo from './Todo'
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      listArray: [],
      userInput: ''
    }
  }

  handleUpdate(value){
    this.setState({
      userInput: value
    })
  }

  handleAdd(){
    var updateArr = this.state.listArray;
    updateArr.push(this.state.userInput)
    this.setState({
      listArray: updateArr
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <div>
          <input 
          onChange = { (e) => this.handleUpdate(e.target.value) }
          value = {this.state.userInput}/>
          <button
          onClick = { () => this.handleAdd(this.userInput) }>Add</button>
        </div>
        <Todo arr={this.state.listArray}/>
      </div>
    );
  }
}

export default App;
