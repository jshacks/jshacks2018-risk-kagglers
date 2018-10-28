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
         },
         visitors : []
      }
   }

  componentDidMount() {
    fetch('http://localhost:3000/api/')
    .then(results => {
      return results.json();
    })
    .then(data => {
      console.log(data);
      this.setState({visitors: data});
    })
  }

  render() {
    return (
      <div className="main">

        <div className="row">

          <DashboardCard stats={this.state.stats} />
          <GraphCard />

        </div>

        <div className="row">

          <ListCard visitors={this.state.visitors}/>

        </div>

      </div>
    );
  }
}

export default Main;
