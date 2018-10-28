import React, { Component } from 'react';
import './ListCard.css';

class ListCard extends Component {
  render() {
    const visitors = this.props.visitors;
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
              {visitors.map((visitor, key) => (
                <tr key={key}>
                  <td>{visitor.fullVisitorId}</td>
                  <td>{visitor["totals.pageviews"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListCard;
