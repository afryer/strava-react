import React from 'react';
import ReactDOM from 'react-dom';
import Activity from './Activity';

// Need to manage ajax request
it('renders without crashing', () => {
  const tableBody = document.createElement('tbody');
  ReactDOM.render(<Activity />, tableBody);
  ReactDOM.unmountComponentAtNode(tableBody);
});

