import React, {Component} from 'react';

import './card.css';

class DashboardCardFooter extends Component {

    render() {
        return (
            <div className="card-footer">
                <div className="small-label">Goal: <span>34235</span> </div>
                <div className="small-label">Timeframe: <span>4y</span></div>
            </div>
        );
    }
}

export default DashboardCardFooter;