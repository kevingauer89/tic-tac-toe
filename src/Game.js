import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board'
// Board is imported to the Game.js where the logic for the actual game would be
class App extends Component {
    render() {
        return(
        <Board/>
    )
  }
}

export default App;
