import React, { Component } from 'react';
import './InfoCard.css';

class InfoCard extends Component {
    render() {
        return (
            <div className="card-content">
                <div className="wrapper">
                    
                    <div className="medium-title">Cluster Information</div>
                    <div className="subtitle">Devices</div>
                    <div className="small-list">
                        <div>Chrome</div>
                        <div>Firefox</div>
                        <div>Internet Explorer</div>
                        <div>Safari</div>
                    </div>
                    <div className="subtitle">Page Visits</div>
                    <div className="slidecontainer">
                        <input type="range" min="1" max="100" defaultValue="10" className="slider" id="myRange" />
                    </div>
                    <div className="subtitle">Ads frequency</div>
                    <div className="slidecontainer">
                        <input type="range" min="1" max="100" defaultValue="50" className="slider" id="myRange" />
                    </div>
                    <div className="subtitle">Revenue</div>
                    <div className="slidecontainer">
                        <input type="range" min="1" max="100" defaultValue="30" className="slider" id="myRange" />
                    </div>
                    <div className="subtitle">Discount percentage</div>
                    <div className="slidecontainer">
                        <input type="range" min="1" max="100" defaultValue="15" className="slider" id="myRange" />
                    </div>
                </div>
            </div>

        );
    }
}

export default InfoCard;
