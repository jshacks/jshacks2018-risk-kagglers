import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <button className="home active"><i className="fas fa-home"></i></button>
        <button className="settings"><i className="fas fa-cog"></i></button>
      </div>
    );
  }
}

export default Menu;
