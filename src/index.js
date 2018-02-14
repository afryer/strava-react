import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Activities from './Activities';
import Athlete from './Athlete/Athlete';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Athlete />, document.getElementById("athlete"));
ReactDOM.render(<Activities />, document.getElementById("strava"));
ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
