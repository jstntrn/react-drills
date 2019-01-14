import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  handleUsername(val){
    this.setState({
      username: val
    })
  }

  handlePassword(val){
    this.setState({
      password: val
    })
  }

  handleAlert(){
    var alertText = "Username: " + this.state.username + " Password: " + this.state.password;
    alert(alertText)
  }

  render() {
    return (
      <div className="App">
        <input 
        onChange = { (e) => this.handleUsername(e.target.value) }
        value = {this.state.username} />
        <input 
        onChange = { (e) => this.handlePassword(e.target.value) }
        value = {this.state.password} />
        <button 
        onClick={() => this.handleAlert()}>Login</button>
      </div>
    );
  }
}

export default App;
