import { shallow } from 'enzyme';
import React from 'react';
import Title from './Title';

test('Title component renders "No title provided" if no passed props', () => {
  const wrapper = shallow(<Title />);
  expect(wrapper).toMatchSnapshot();
});

test('Title component renders title', () => {
  const mockTitle = { title: 'Test title of movie' };
  const wrapper = shallow(<Title {...mockTitle} />);
  expect(wrapper).toMatchSnapshot();
});
