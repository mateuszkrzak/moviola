import { shallow } from 'enzyme';
import React from 'react';
import Poster from './Poster';

test('Poster component renders placeholder if no passed props', () => {
  const wrapper = shallow(<Poster />);
  expect(wrapper).toMatchSnapshot();
});

test('Poster component renders release year', () => {
  const mockPosterProps = { src: 'http://url.for.test.title.cover', title: 'Test title' };
  const wrapper = shallow(<Poster {...mockPosterProps} />);
  expect(wrapper).toMatchSnapshot();
});
