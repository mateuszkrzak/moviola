import React from 'react';
import { shallow } from 'enzyme';
import { MovieDetailsPage } from './MovieDetailsPage';

describe('MovieDetailsPage component ', () => {
  const mockMovie = {
    title: 'Test tile',
    release_date: '2020-10-20',
    vote_average: 9,
    poster_path: 'http://poster.path',
    runtime: 120,
    overview: 'Test overview',
    genres: ['Test genre', 'Another test genre'],
  };
  const getAsyncMock = jest.fn();

  test('renders MovieDetailsPage', () => {
    const props = {
      match: {
        params: {
          id: 1
        }
      },
    };
    const component = shallow(<MovieDetailsPage
      movie={mockMovie}
      similarMovies={[mockMovie, mockMovie]}
      getMovieByIdAndSimilarMoviesAsync={getAsyncMock}
      {...props}
    />);

    expect(component).toMatchSnapshot();
  });
});
