import React from 'react';
import { shallow } from 'enzyme';
import { SearchPage } from './SearchPage';

describe('SearchPage component ', () => {
  test('renders SearchPage', () => {
    const component = shallow(<SearchPage />);

    expect(component).toMatchSnapshot();
  });
});
