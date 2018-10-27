import React, { Component } from 'react';
import './Main.css';
import './dashboardcard/DashboardCard';
import DashboardCard from './dashboardcard/DashboardCard';

class Main extends Component {

   constructor(props) {
      super(props);
      this.state = {
         stats: {
           totalValue: "463463",
           relativeValue: "5.69"
         }
      }
   }

  render() {
    return (
      <div className="main">
      
        <DashboardCard stats={this.state.stats}>

        </DashboardCard>
      </div>
    );
  }
}

export default Main;
