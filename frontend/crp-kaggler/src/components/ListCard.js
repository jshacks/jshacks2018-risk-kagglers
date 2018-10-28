import React, { Component } from 'react';
import './ListCard.css';

class ListCard extends Component {
  render() {
    return (
      <div className="list_card card-content">
        <div className="wrapper">
          <div className="medium-title">Most valuable</div>
          <table className="list">
            <thead>
              <tr>
                <th>Visitor</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>7639415621470426868</td>
                <td>785500</td>
              </tr>
              <tr>
                <td>7639415621470426868</td>
                <td>785500</td>
              </tr>
              <tr>
                <td>7639415621470426868</td>
                <td>785500</td>
              </tr>
              <tr>
                <td>7639415621470426868</td>
                <td>785500</td>
              </tr>
              <tr>
                <td>7639415621470426868</td>
                <td>785500</td>
              </tr>
              <tr>
                <td>7639415621470426868</td>
                <td>785500</td>
              </tr>
              <tr>
                <td>7639415621470426868</td>
                <td>785500</td>
              </tr>
              <tr>
                <td>7639415621470426868</td>
                <td>785500</td>
              </tr>
              <tr>
                <td>7639415621470426868</td>
                <td>785500</td>
              </tr>
              <tr>
                <td>7639415621470426868</td>
                <td>785500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListCard;
