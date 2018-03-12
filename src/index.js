import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/global/Header';
import Activities from './components/activities/activities';
import Athlete from './components/profile/Athlete';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Activities />, document.getElementById("strava"));
ReactDOM.render(<Athlete />, document.getElementById("athlete"));


registerServiceWorker();
