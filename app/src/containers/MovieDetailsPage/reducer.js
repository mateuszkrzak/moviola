import {
  FETCH_MOVIE_BY_ID_REQUEST,
  FETCH_MOVIE_BY_ID_FAILURE,
  FETCH_MOVIE_BY_ID_SUCCESS,
  FETCH_MOVIES_BY_GENRES_REQUEST,
  FETCH_MOVIES_BY_GENRES_FAILURE,
  FETCH_MOVIES_BY_GENRES_SUCCESS,
} from './action-types';
import createReducer from '../../redux/create-reducer';

export const initialState = {
  movie: {
    id: -1,
    title: '',
    release_date: '2018-01-30',
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

const fetchRequest = state => ({ ...state, isLoading: true });
const fetchFailure = (state, action) => ({
  ...state,
  isLoading: false,
  error: action,
});

const fetchMovieByIdSuccess = (state, action) => ({
  ...state,
  movie: action,
  isLoading: false,
  error: '',
});

const fetchMoviesByGenresSuccess = (state, action) => ({
  ...state,
  similarMovies: action,
  isLoading: false,
  error: '',
});

export default createReducer(initialState, {
  [FETCH_MOVIE_BY_ID_REQUEST]: fetchRequest,
  [FETCH_MOVIE_BY_ID_FAILURE]: fetchFailure,
  [FETCH_MOVIE_BY_ID_SUCCESS]: fetchMovieByIdSuccess,
  [FETCH_MOVIES_BY_GENRES_REQUEST]: fetchRequest,
  [FETCH_MOVIES_BY_GENRES_FAILURE]: fetchFailure,
  [FETCH_MOVIES_BY_GENRES_SUCCESS]: fetchMoviesByGenresSuccess,
});
