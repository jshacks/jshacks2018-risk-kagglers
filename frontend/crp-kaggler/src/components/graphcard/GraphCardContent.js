import React, { Component } from 'react';
import './graph.css';
import { BarChart, XAxis, YAxis, Bar, Legend, Tooltip } from 'recharts';



class GraphCardContent extends Component {
	render() {
        const data = [
            {name: 'January', 2017: 4000, 2018: 2400, amt: 2400},
            {name: 'February', 2017: 3000, 2018: 1398, amt: 2210},
            {name: 'March', 2017: 2000, 2018: 4800, amt: 2290},
            {name: 'April', 2017: 2780, 2018: 3908, amt: 2000},
            {name: 'May', 2017: 1890, 2018: 4800, amt: 2181},
            {name: 'June', 2017: 2390, 2018: 3800, amt: 2500},
            {name: 'July', 2017: 3490, 2018: 4300, amt: 2100},
            {name: 'August', 2017: 2018, 2018: 3000, amt: 2100},
            {name: 'September', 2017: 3490, 2018: 4300, amt: 2100},
            {name: 'October', 2017: 2000, 2018: 4300, amt: 2100},
            {name: 'November', 2017: 3490, 2018: 3908, amt: 2100},
            {name: 'December', 2017: 2780, 2018: 4800, amt: 2100}
        ];
        return (
            <div className="graph-content">
            <div className="medium-title">Last year vs this year</div>
            <br />
            <BarChart width={500} height={250} data={data}>
            <XAxis dataKey="name"  />
            <YAxis />
            <Bar dataKey="2017" fill="#FEC400" />
            <Bar dataKey="2018" fill="#4C84FF" />
            <Tooltip />
            <Legend />
            </BarChart>
            </div>
        );
	  }

}

export default GraphCardContent;