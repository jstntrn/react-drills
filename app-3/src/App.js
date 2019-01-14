import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      futureGarage: ['Lamborghini Gallardo', 'Porsche GT2RS', 'Ford Raptor', 'BMW M3', 'Toyota Chaser'],
      filteredGarage: ['Lamborghini Gallardo', 'Porsche GT2RS', 'Ford Raptor', 'BMW M3', 'Toyota Chaser'],
      userInput: ''
    }
  }

  handleInput(val){
    var filteredArray = this.state.futureGarage.filter((element, i) => element.includes(val))
    console.log(filteredArray)
    this.setState({
      userInput: val,
      filteredGarage: filteredArray
    })
  }

  render() {
    const displayList = this.state.filteredGarage.map((element, i) => (
      <div>
        <h2>{element}</h2>
      </div>
    ))

    return (
      <div className="App">
        <input 
          onChange = {(e) => this.handleInput(e.target.value)}
          value = {this.state.userInput}/>
        {displayList}
      </div>
    );
  }
}

export default App;
