import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from './Jumbotron';
import MenuHeader from './menu/Menu';

class App extends Component {
  render() {
    return (

      <div className="App">
      <MenuHeader></MenuHeader>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Jumbotron></Jumbotron>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
