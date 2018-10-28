import React, { Component } from 'react';
import './Main.css';
import DashboardCard from './dashboardcard/DashboardCard';
import GraphCard from './graphcard/GraphCard';
import ListCard from './ListCard';

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

        <div className="row">

          <DashboardCard stats={this.state.stats} />
          <GraphCard />

        </div>

        <div className="row">

          <ListCard />

        </div>

      </div>
    );
  }
}

export default Main;
