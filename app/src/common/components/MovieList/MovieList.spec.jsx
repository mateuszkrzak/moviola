import { shallow } from 'enzyme';
import React from 'react';
import MovieList from './MovieList';

test('MovieList component renders "No films found" if passed movies array is empty', () => {
  const mockMovies = [];
  const wrapper = shallow(<MovieList movies={mockMovies} />);
  expect(wrapper).toMatchSnapshot();
});

test('MovieList component renders MovieElement components', () => {
  const mockMovies = [{ id: 1 }];
  const wrapper = shallow(<MovieList movies={mockMovies} />);
  expect(wrapper).toMatchSnapshot();
});
