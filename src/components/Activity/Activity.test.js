import React from 'react';
import ReactDOM from 'react-dom';
import Activity from './Activity';

it('renders without crashing', () => {
    const div = document.createElement('tbody');
    ReactDOM.render(
        <Activity/>, div);
});