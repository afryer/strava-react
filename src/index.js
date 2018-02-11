import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Strava from './Strava';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Strava />, document.getElementById("strava"));
registerServiceWorker();
