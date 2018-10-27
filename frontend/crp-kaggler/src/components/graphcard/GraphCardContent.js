import React, { Component } from 'react';
import './graph.css';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
// import PowerChart from 'fusioncharts/fusioncharts.powercharts';
// import WidgetsCharts from 'fusioncharts/fusioncharts.widgets';
// import GanntCharts from 'fusioncharts/fusioncharts.gantt';
// import TreemapChart from 'fusioncharts/fusioncharts.treemap';
// import Zoomscatter from 'fusioncharts/fusioncharts.zoomscatter';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
//the json
const chartConfigs = {
    type: 'column2d',// The chart type
    width: '700', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: { 
        // Chart Configuration 
        "chart": {
            "caption": "Countries With Most Oil Reserves [2017-18]",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "K",
            "theme": "fusion",
        },
        // Chart Data
        "data": [{
            "label": "Venezuela",
            "value": "290"
        }, {
            "label": "Saudi",
            "value": "260"
        }, {
            "label": "Canada",
            "value": "180"
        }, {
            "label": "Iran",
            "value": "140"
        }, {
            "label": "Russia",
            "value": "115"
        }, {
            "label": "UAE",
            "value": "100"
        }, {
            "label": "US",
            "value": "30"
        }, {
            "label": "China",
            "value": "30"
        }]
    }
};

class GraphCardContent extends Component {
	render() {
	     return (
	     	<div className="graph-content">
	     <ReactFC
	        {...chartConfigs}/>
	        </div>
	     );
	  }

}

export default GraphCardContent;