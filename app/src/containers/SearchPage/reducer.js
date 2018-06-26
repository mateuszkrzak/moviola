// @flow

import { 
  FETCH_MOVIES_REQUEST, 
  FETCH_MOVIES_FAILURE, 
  FETCH_MOVIES_SUCCESS,
  SET_MOVIES_QUERY,
  SET_MOVIES_SORT_BY,
  SET_MOVIES_SEARCH_BY
} from './action-types';
import createReducer from '../../redux/create-reducer';

export type Movie = {|
  +id: number,
  +title: string,
  +tagline: string,
  +vote_average: number,
  +vote_count: number,
  +release_date: Date,
  +poster_path: string,
  +overview: string,
  +budget: number,
  +revenue: number,
  +runtime: number,
  +genres: Array<string>,
|};

type SearchState = {|
  +movies: Array<Movie>,
  +error: string,
  +isLoading: boolean,
  +moviesCount: number,
  +query: string,
  +sortBy: string,
  +searchBy: string,
|};

const initialState: SearchState = {
  movies: [],
  error: '',
  isLoading: false,
  moviesCount: 0,
  query: '',
  sortBy: '',
  searchBy: 'title'
};

const fetchMoviesRequest = (state: SearchState): SearchState => ({ ...state, isLoading: true });
const fetchMoviesFailure = (state: SearchState, payload: string): SearchState => ({
  ...state,
  isLoading: false,
  error: payload,
});
const fetchMoviesSuccess = (state: SearchState, payload: { movies: Array<Movie>, moviesCount: number }): SearchState => ({
  ...state,
  movies: [...payload.movies],
  moviesCount: payload.moviesCount,
  isLoading: false,
  error: '',
});

const setMoviesQuery = (state: SearchState, payload: string): SearchState => ({
  ...state,
  query: payload
})
const setMoviesSortBy = (state: SearchState, payload: string): SearchState => ({
  ...state,
  sortBy: payload
})
const setMoviesSearchBy = (state: SearchState, payload: string): SearchState => ({
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
