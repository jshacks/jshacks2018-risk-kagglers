import React, { Component } from 'react';

import './card.css';

class DashboardCardContent extends Component {

    render() {
        return (
            <div className="card-content">
                {this.props.children}
            </div>
        );
    }

}

export default DashboardCardContent;