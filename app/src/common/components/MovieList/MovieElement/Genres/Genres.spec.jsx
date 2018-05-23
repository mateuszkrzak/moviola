import { shallow } from 'enzyme';
import React from 'react';
import Genres from './Genres';

test('Genres component renders genres', () => {
  const mockGenresProps = ['Test Genre 1', 'Test Genre 2'];
  const wrapper = shallow(<Genres {...mockGenresProps} />);
  expect(wrapper).toMatchSnapshot();
});
