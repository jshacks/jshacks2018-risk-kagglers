import React, { Component } from 'react';
import './Header.css';
import userImage from '../t_user.jpg';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <button className="menu_button square">
          <i className="fas fa-bars"></i>
        </button>
        <button className="logo">logo</button>
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
