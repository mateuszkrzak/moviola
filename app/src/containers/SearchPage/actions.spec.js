import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import getMoviesAsync from './actions';
import MoviesService from '../../services/MoviesService'; // eslint-disable-line

const middlewares = [thunk];
const mockStore = createMockStore(middlewares);
jest.mock('../../services/MoviesService');

describe('Search actions', () => {
  const mockMovie = {
    title: 'Test tile',
    release_date: '2020-10-20',
    vote_average: 9,
    poster_path: 'http://poster.path',
    runtime: 120,
    overview: 'Test overview',
    genres: ['Test genre', 'Another test genre'],
  };
  let store;

  describe('get movies', () => {
    it('creates FETCH_MOVIES_SUCCESS action when request is successful', async () => {
      MoviesService.getMovies.mockImplementationOnce(() => ({
        data: { data: [mockMovie, mockMovie], total: 2 },
      }));
      store = mockStore({});

      await store.dispatch(getMoviesAsync());

      expect(store.getActions()).toMatchSnapshot();
    });

    it('creates FETCH_MOVIES_FAILURE action when request returns error', async () => {
      MoviesService.getMovies.mockImplementationOnce(() => {
        throw new Error('Test error message');
      });
      store = mockStore({});

      await store.dispatch(getMoviesAsync());

      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
