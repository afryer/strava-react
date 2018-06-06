import React, {Component} from "react";

import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './index.css';
import Header from './components/Global/Header/Header';
import Footer from './components/Global/Footer/Footer';

import Activities from './components/Activities/Activities';
import Athlete from './components/Athlete/Athlete';



class App extends Component {
    render() {
        return <Router>
                <div>
                <Header />
                <ul>
                    <li>
                        <Link to="/">Athlete</Link>
                    </li>
                    <li>
                        <Link to="/activities">Activities</Link>
                    </li>
                </ul>
                <Route exact path="/" component={Athlete} />
                <Route path="/activities" component={Activities} />
 
                <Footer />
                </div>
            </Router>
        }
}

export default App
