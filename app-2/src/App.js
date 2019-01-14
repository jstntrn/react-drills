import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super()

    this.state = {
      futureGarage = []
    }
  }

  render() {
    const list = this.state.futureGarage.map((element, i) => {
      <div>
        <h2>{element}</h2>
      </div>
    })

    return (
      <div className="App">
        {list}
      </div>
    );
  }
}

export default App;
