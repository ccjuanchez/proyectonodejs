import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBox from './components/SearchBox';
import Footer from './components/Footer';
//import Misegundocomponente from './components/Header';
//import Mitercercomponente from './components/Header';
//copyright

class App extends Component {
  constructor(props){
    super(props);
    this.state={
        searchText:'Busqueda: ',
    };
    this.handleSearchTextChanged=this.handleSearchTextChanged.bind(this);
  }
  handleSearchTextChanged=(event)=>{
    this.setState({
      searchText:event.target.value
    });
  }
  render() {
    return (
      <div>
        <header title ="Gabriel"/>
            <div className="Container"> 
                <div className="row"> 
                  <div className="col-sm-6"> 
                      <SearchBox
                       value={this.state.searchText}
                       onchange={this.handleSearchTextChanged}
                       />
                  </div>
                  <div className="col-sm-6">
                    <h1>Nuevo Contacto</h1>   
                  </div>
                </div>
                <Footer copyright="Copyright 2017 - puce"/>
            </div>
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