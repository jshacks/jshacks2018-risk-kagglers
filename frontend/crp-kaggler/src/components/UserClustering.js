import React, { Component } from 'react';
import { ScatterChart, XAxis, YAxis, CartesianGrid, Legend, Tooltip, Scatter } from 'recharts';
import './UserClustering.css';

class UserClustering extends Component {
	render() {
        const data = [{x: 100, y: 200, z: 200}, {x: 120, y: 100, z: 260},
            {x: 170, y: 300, z: 400}, {x: 140, y: 250, z: 280},
            {x: 150, y: 400, z: 500}, {x: 110, y: 280, z: 200}]
		return (
            <div className="graph_card">
                
                <div className="medium-title">Customers Clustering</div>
                
                <ScatterChart width={500} height={250} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                    <CartesianGrid />
                    <XAxis dataKey={'x'} type="number"/>
                    <YAxis dataKey={'y'} type="number"/>
                    <Scatter name='Customer' data={data} fill='#8884d8'/>
                    <Tooltip cursor={{strokeDasharray: '3 3'}}/>
                    <Legend />
                </ScatterChart>
            </div>

		);
	}
}

export default UserClustering;
