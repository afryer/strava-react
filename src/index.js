import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Activities from './Activities';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Activities />, document.getElementById("strava"));
registerServiceWorker();
