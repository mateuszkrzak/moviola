import React from 'react';
import { shallow } from 'enzyme';
import { SearchPage } from './SearchPage';

describe('SearchPage component ', () => {
  const props = {
    location: {
      pathname: '/'
    },
    match: {
      params: {
        query: 'test query'
      }
    },
    history: []
  };

  test('renders SearchPage', () => {
    const component = shallow(<SearchPage {...props} />);

    expect(component).toMatchSnapshot();
  });

  test('should call api action when click on find button', () => {
    const spy = jest.fn();
    const component = shallow(<SearchPage {...props} getMoviesAsync={spy} />);
    component.setState({search: 'test'});

    component.find('button').simulate('click');
    expect(spy.mock.calls).toMatchSnapshot();
  });

  test('should call api action when change sort option', () => {
    const spy = jest.fn();
    const component = shallow(<SearchPage {...props} getMoviesAsync={spy} />);

    component.find('MovieListOptions').simulate('change', 'sort option');

    expect(spy.mock.calls).toMatchSnapshot();
  });

  test('should call api action when change filter option', () => {
    const spy = jest.fn();
    const component = shallow(<SearchPage {...props} getMoviesAsync={spy} />);

    component.find('SearchFilters').simulate('change', 'filter option');

    expect(component.state()).toMatchSnapshot();
  });
    
  test('should call api action when change search bar text', () => {
    const spy = jest.fn();
    const component = shallow(<SearchPage {...props} getMoviesAsync={spy} />);

    component.find('SearchBar').simulate('change', 'test search value');

    expect(component.state()).toMatchSnapshot();
  });
});
