import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Assignment from './components/Assignment';
import Student from './components/Student';
import Count from './components/Count';

class App extends Component {


  render(){
  return (
    <div className="App">
      <Count />
       <Student />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
        <Assignment />
      </header>
     
    </div>
  );
}
}

export default App;
