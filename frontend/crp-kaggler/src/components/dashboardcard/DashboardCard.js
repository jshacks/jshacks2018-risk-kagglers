import DashboardCardContent from './DashboardCardContent';
import DashboardCardFooter from './DashboardCardFooter';
import DashboardCardStats from './DashboardCardStats';

import React, { Component}  from 'react';

import './card.css';

class DashboardCard extends Component {

    render() {
        let {
            stats
        } = this.props;
        return (
            <DashboardCardContent>
            
                {
                    stats !== undefined //check if we have data
                    ? 
                    <DashboardCardStats stats={stats}/> : null
                }

                <DashboardCardFooter> 
            
                </DashboardCardFooter>
            
            </DashboardCardContent>

        );
    }
}

export default DashboardCard;