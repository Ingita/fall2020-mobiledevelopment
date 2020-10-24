import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Assignment from './components/Assignment';
import Student from './components/Student';
import Count from './components/Count';
import pic1 from './images/pic1.png';
import Paragraph from './components/Paragraph';
import Footer from './components/Footer';
class App extends Component {
  render(){
  return (
    <div className="App">
     
     
      
      <header className="App-header">
      <Student />
      <div className="grid">
        <div className="box">
      <Paragraph />
      </div>
      </div>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
      <img src={pic1} alt="nature" />
      
    </div>
        <p>
        </p>
        <div className="box">
        <Assignment />
        </div>
        <div className="box">
        <Count />
        </div>
      </header>
      <Footer />
    </div>
        
  );
}
}

export default App;
