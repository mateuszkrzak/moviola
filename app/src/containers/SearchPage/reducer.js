import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_FAILURE, FETCH_MOVIES_SUCCESS } from './action-types';
import createReducer from '../../redux/create-reducer';

const initialState = {
  movies: [],
  error: '',
  isLoading: false,
  moviesCount: 0,
};

const fetchMoviesRequest = state => ({ ...state, isLoading: true });
const fetchMoviesFailure = (state, action) => ({
  ...state,
  isLoading: false,
  error: action,
});
const fetchMoviesSuccess = (state, action) => ({
  movies: [...action.movies],
  moviesCount: action.moviesCount,
  isLoading: false,
  error: '',
});

export default createReducer(initialState, {
  [FETCH_MOVIES_REQUEST]: fetchMoviesRequest,
  [FETCH_MOVIES_FAILURE]: fetchMoviesFailure,
  [FETCH_MOVIES_SUCCESS]: fetchMoviesSuccess,
});
