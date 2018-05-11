import { shallow } from 'enzyme';
import React from 'react';
import ReleaseYear from './ReleaseYear';

test('ReleaseYear component renders "No release date provided" if no passed props', () => {
  const wrapper = shallow(<ReleaseYear />);
  expect(wrapper).toMatchSnapshot();
});

test('ReleaseYear component renders release year', () => {
  const mockReleaseDate = { releaseDate: '2018-01-31' };
  const wrapper = shallow(<ReleaseYear {...mockReleaseDate} />);
  expect(wrapper).toMatchSnapshot();
});
