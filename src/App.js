import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Misegundocomponente from './components/Header';
import Mitercercomponente from './components/Header';
//copyright

class App extends Component {
  render() {
    return (
      <div>
        <Misegundocomponente title="Address book"/>
        hola mundo
        <Mitercercomponente copyright="hola"/>
        </div>
        
      
    );
  }
}
/*
export const a=2;
export const b=3;
// 
import {a,b}='App'*/
export default App;
/*<div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>*/