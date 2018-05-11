import React from 'react';
import renderer from 'react-test-renderer';
import SearchPage from './SearchPage';

test('SearchPage component renders SearchPage', () => {
  const component = renderer.create(<SearchPage />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
