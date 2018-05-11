import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

test('App component renders search page by default', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
