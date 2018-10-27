import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="main_container">
          <Menu />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
