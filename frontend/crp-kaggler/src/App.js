import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: true };
    this.toggleMenu = this.toggleMenu.bind(this);

  }

  toggleMenu = function() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    return (
      <div className="app">
          <Header toggleMenu={this.toggleMenu}/>
            <div className="main_container">
          <Menu showMenu={this.state.showMenu}/>
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
