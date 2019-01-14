import React, { Component } from 'react';
import NewTask from './NewTask';
import List from './List';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      listArray: []
    }

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(val){
    var updateArr = this.state.listArray;
    updateArr.push(val)
    this.setState({
      listArray: updateArr
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask method={(data) => this.handleAdd(data)}/>
        <List arr={this.state.listArray}/>
      </div>
    );
  }
}

export default App;
