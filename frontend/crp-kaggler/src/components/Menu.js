import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <button className="home active square"><i className="fas fa-home"></i></button>
        <button className="settings square"><i className="fas fa-cog"></i></button>
      </div>
    );
  }
}

export default Menu;
