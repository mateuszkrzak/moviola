import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_FAILURE, FETCH_MOVIES_SUCCESS } from './action-types';
import searchReducer from './reducer';

describe('Search reducer', () => {
  const initialState = {
    movies: [],
    error: '',
    isLoading: false,
    moviesCount: 0,
  };

  const mockMovie = {
    title: 'Test tile',
    release_date: '2020-10-20',
    vote_average: 9,
    poster_path: 'http://poster.path',
    runtime: 120,
    overview: 'Test overview',
    genres: ['Test genre', 'Another test genre'],
  };

  it('should return the initial state', () => {
    const action = {
      type: null,
    };

    const testedReducer = searchReducer(undefined, action);

    expect(testedReducer).toMatchSnapshot();
  });

  it('should set isLoading after FETCH_MOVIES_REQUEST action', () => {
    const action = {
      type: FETCH_MOVIES_REQUEST,
    };

    const testedReducer = searchReducer(initialState, action);

    expect(testedReducer).toMatchSnapshot();
  });

  it('should set movies after FETCH_MOVIES_SUCCESS action', () => {
    const action = {
      payload: { movies: [mockMovie, mockMovie, mockMovie], moviesCount: 3 },
      type: FETCH_MOVIES_SUCCESS,
    };

    const testedReducer = searchReducer(initialState, action);

    expect(testedReducer).toMatchSnapshot();
  });

  it('should handle FETCH_MOVIES_FAILURE action', () => {
    const action = {
      type: FETCH_MOVIES_FAILURE,
      payload: 'Test error message',
    };

    const testedReducer = searchReducer(initialState, action);

    expect(testedReducer).toMatchSnapshot();
  });
});
