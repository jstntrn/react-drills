import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      textDisplay: '',
    }
  }


  handleTextInput(val){
    this.setState({
      textDisplay: val
    })
  }


  render() {

    return (
      <div className="App">
        <input 
          onChange = {(e) => this.handleTextInput(e.target.value)}
          value = {this.state.textDisplay}/>
        <h2>{this.state.textDisplay}</h2>
      </div>
    );
  }
}

export default App;
