import {
  FETCH_MOVIE_BY_ID_REQUEST,
  FETCH_MOVIE_BY_ID_FAILURE,
  FETCH_MOVIE_BY_ID_SUCCESS,
  FETCH_MOVIES_BY_GENRES_SUCCESS,
} from './action-types';
import detailsReduer from './reducer';

describe('Details reducer', () => {
  const initialState = {
    movie: {
      title: '',
      release_date: '',
      vote_average: 0,
      poster_path: '',
      runtime: 0,
      overview: '',
      genres: [],
    },
    similarMovies: [],
    error: '',
    isLoading: false,
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

    const testedReducer = detailsReduer(undefined, action);

    expect(testedReducer).toMatchSnapshot();
  });

  it('should set isLoading after FETCH_MOVIE_BY_ID_REQUEST action', () => {
    const action = {
      type: FETCH_MOVIE_BY_ID_REQUEST,
    };

    const testedReducer = detailsReduer(initialState, action);

    expect(testedReducer).toMatchSnapshot();
  });

  it('should set movie after FETCH_MOVIE_BY_ID_SUCCESS action', () => {
    const action = {
      payload: mockMovie,
      type: FETCH_MOVIE_BY_ID_SUCCESS,
    };

    const testedReducer = detailsReduer(initialState, action);

    expect(testedReducer).toMatchSnapshot();
  });

  it('should handle FETCH_MOVIE_BY_ID_FAILURE action', () => {
    const action = {
      type: FETCH_MOVIE_BY_ID_FAILURE,
      payload: 'Test error message',
    };

    const testedReducer = detailsReduer(initialState, action);

    expect(testedReducer).toMatchSnapshot();
  });

  it('should set movie after FETCH_MOVIES_BY_GENRES_SUCCESS action', () => {
    const action = {
      payload: [mockMovie, mockMovie],
      type: FETCH_MOVIES_BY_GENRES_SUCCESS,
    };

    const testedReducer = detailsReduer(initialState, action);

    expect(testedReducer).toMatchSnapshot();
  });
});
