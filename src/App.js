import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Tweet a compliment sandwich to @realDonaldTrump</h2>
        </div>
        <p className="App-intro">

          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>Nail Down: </div>
        <div>Firebase</div>
        <div>Bootstrap</div>

        <div>Next time: set this same thing up for the other site you talked about "how many do i have left" etc</div>

      </div>
    );
  }
}

export default App;
