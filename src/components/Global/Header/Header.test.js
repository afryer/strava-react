import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Header from './Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Header/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders welcome message', () => {
  const wrapper = shallow(<Header/>);
  const welcome = <h1 className="App-title">Welcome to Strava App</h1>;
  // expect(wrapper.contains(welcome)).toBe(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});

describe('The header', function () {
  it('should render without throwing an error', function () {
    expect(shallow(<Header/>).contains(
      <h1 className="App-title">Welcome to Strava App</h1>
    )).toBe(true);
  });
});