import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Global/Header/Header';
import Footer from './components/Global/Footer/Footer';

import Activities from './components/Activities/Activities';
import Athlete from './components/Athlete/Athlete';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Activities />, document.getElementById("strava"));
ReactDOM.render(<Athlete />, document.getElementById("athlete"));
ReactDOM.render(<Footer/>, document.getElementById("footer"));


registerServiceWorker();
