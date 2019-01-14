import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super()

    this.state = {
      futureGarage: ['Lamborghini Gallardo', 'Porsche GT2RS', 'Ford Raptor', 'BMW M3', 'Toyota Chaser']
    }
  }

  render() {
    const list = this.state.futureGarage.map((element, i) => (
      <div key={i}>
        <h2>{element}</h2>
      </div>
    ));

    return (
      <div className="App">
        {list}
      </div>
    );
  }
}

export default App;
