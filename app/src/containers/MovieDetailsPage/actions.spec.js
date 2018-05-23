import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import getMovieByIdAndSimilarMoviesAsync from './actions';
import MoviesService from '../../services/MoviesService'; // eslint-disable-line

const middlewares = [thunk];
const mockStore = createMockStore(middlewares);
const mockMovie = {
  title: 'Test tile',
  release_date: '2020-10-20',
  vote_average: 9,
  poster_path: 'http://poster.path',
  runtime: 120,
  overview: 'Test overview',
  genres: ['Test genre', 'Another test genre'],
};

jest.mock('../../services/MoviesService');

describe('Details actions', () => {
  let store;

  describe('get movie by id and similar movies', () => {
    it('creates FETCH_MOVIE_BY_ID_SUCCESS and FETCH_MOVIES_BY_GENRES_SUCCESS actions when requests is successful', async () => {
      MoviesService.getMovieById.mockImplementationOnce(() => ({
        data: mockMovie,
      }));
      MoviesService.getMoviesByGenres.mockImplementationOnce(() => ({
        data: { data: [mockMovie, mockMovie], total: 2 },
      }));
      store = mockStore({
        details: {
          movie: {
            genres: ['Test genre', 'Another test genre'],
          },
        },
      });

      await store.dispatch(getMovieByIdAndSimilarMoviesAsync());

      expect(store.getActions()).toMatchSnapshot();
    });

    it('should catch errors when getMovieById request fails', async () => {
      MoviesService.getMovieById.mockImplementationOnce(() => {
        throw new Error('getMovieById error message');
      });

      store = mockStore();

      await store.dispatch(getMovieByIdAndSimilarMoviesAsync());

      expect(store.getActions()).toMatchSnapshot();
    });

    it('should catch errors when getMoviesByGenres request fails', async () => {
      MoviesService.getMovieById.mockImplementationOnce(() => ({
        data: mockMovie,
      }));
      MoviesService.getMoviesByGenres.mockImplementationOnce(() => {
        throw new Error('getMoviesByGenres error message');
      });
      store = mockStore({
        details: {
          movie: {
            genres: ['Test genre', 'Another test genre'],
          },
        },
      });

      await store.dispatch(getMovieByIdAndSimilarMoviesAsync());

      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
