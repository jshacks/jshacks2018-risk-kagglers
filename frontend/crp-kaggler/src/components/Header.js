import React, { Component } from 'react';
import './Header.css';
import userImage from '../img/t_user.jpg';
import logo from '../img/logo1.svg';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <button className="menu_button square" onClick={this.props.toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
        <a className="logo" href="/index.html" ><img src={logo} alt="logo"/></a>
        <button className="notification_button square">
          <i className="fas fa-bell"></i>
        </button>
        <div className="user_info">
          <div className="user_image"><img src={userImage} alt="HG"/></div>
          <div className="user_name">Huge Jackman</div>
        </div>
      </div>
    );
  }
}

export default Header;
