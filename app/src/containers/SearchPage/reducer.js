import { 
  FETCH_MOVIES_REQUEST, 
  FETCH_MOVIES_FAILURE, 
  FETCH_MOVIES_SUCCESS,
  SET_MOVIES_QUERY,
  SET_MOVIES_SORT_BY,
  SET_MOVIES_SEARCH_BY
} from './action-types';
import createReducer from '../../redux/create-reducer';

const initialState = {
  movies: [],
  error: '',
  isLoading: false,
  moviesCount: 0,
  query: '',
  sortBy: '',
  searchBy: 'title'
};

const fetchMoviesRequest = state => ({ ...state, isLoading: true });
const fetchMoviesFailure = (state, payload) => ({
  ...state,
  isLoading: false,
  error: payload,
});
const fetchMoviesSuccess = (state, payload) => ({
  ...state,
  movies: [...payload.movies],
  moviesCount: payload.moviesCount,
  isLoading: false,
  error: '',
});

const setMoviesQuery = (state, payload) => ({
  ...state,
  query: payload
})
const setMoviesSortBy = (state, payload) => ({
  ...state,
  sortBy: payload
})
const setMoviesSearchBy = (state, payload) => ({
  ...state,
  searchBy: payload
})

export default createReducer(initialState, {
  [FETCH_MOVIES_REQUEST]: fetchMoviesRequest,
  [FETCH_MOVIES_FAILURE]: fetchMoviesFailure,
  [FETCH_MOVIES_SUCCESS]: fetchMoviesSuccess,
  [SET_MOVIES_QUERY]: setMoviesQuery,
  [SET_MOVIES_SORT_BY]: setMoviesSortBy,
  [SET_MOVIES_SEARCH_BY]: setMoviesSearchBy
});
