import React from 'react';
import { mount, shallow } from 'enzyme';
import SearchFilters from './SearchFilters';

describe('SearchFilters component ', () => {
  test('should call on change handler when click on filters', () => {
    const spy = jest.fn();
    const component = shallow(<SearchFilters value='testValue' onChange={spy} />);
    const titleButton = component.find('button').at(0);
    const genreButton = component.find('button').at(1);
    
    genreButton.simulate('click', { target: { innerHTML: 'genres' }});
    titleButton.simulate('click', { target: { innerHTML: 'title' }});

    expect(spy.mock.calls).toMatchSnapshot();
  });
});
