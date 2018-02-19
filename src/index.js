import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Activities from './activities';
import Athlete from './Athlete/Athlete';
// import FilterableProductTable from './Athlete/filter'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Athlete />, document.getElementById("athlete"));
ReactDOM.render(<Activities />, document.getElementById("strava"));
ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<FilterableProductTable />, document.getElementById("container"));


registerServiceWorker();
