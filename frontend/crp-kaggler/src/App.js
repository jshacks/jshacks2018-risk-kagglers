import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';


import ReactDOM from 'react-dom';

// Step 2 - Including the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Step 3 - Including the fusioncharts library
import FusionCharts from 'fusioncharts';

// Step 4 - Including the chart type
import Column2D from 'fusioncharts/fusioncharts.charts';

// Step 5 - Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="main_container">
          <Menu />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
