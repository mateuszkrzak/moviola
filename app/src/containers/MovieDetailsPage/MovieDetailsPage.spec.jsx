import React from 'react';
import renderer from 'react-test-renderer';
import MovieDetailsPage from './MovieDetailsPage';

test('MovieDetailsPage component renders MovieDetailsPage', () => {
  const component = renderer.create(<MovieDetailsPage />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
