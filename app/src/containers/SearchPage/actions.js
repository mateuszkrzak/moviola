// @flow

import moviesService from '../../services/MoviesService';
import type { Movie } from './reducer';

type FetchMoviesRequestAction = { type: "FETCH_MOVIES_REQUEST"};
type FetchMoviesFailureAction = { type: "FETCH_MOVIES_FAILURE", payload: string };
type FetchMoviesSuccessAction = { type: "FETCH_MOVIES_SUCCESS", payload: { movies: Array<Movie>, moviesCount: number} };
type SetMoviesQueryAction = { type: 'SET_MOVIES_QUERY', payload: string };
type SetMoviesSortByAction = { type: 'SET_MOVIES_SORT_BY', payload: string };
type SetMoviesSearchByAction = { type: 'SET_MOVIES_SEARCH_BY', payload: string };

function getMoviesRequest(): FetchMoviesRequestAction {
  return {
    type: "FETCH_MOVIES_REQUEST",
  };
}

function getMoviesFailure(error): FetchMoviesFailureAction {
  return {
    type: "FETCH_MOVIES_FAILURE",
    payload: error,
  };
}

type MoviesResponse = {
  data: Array<Movie>,
  total: number,
}

function getMoviesSuccess(data: MoviesResponse): FetchMoviesSuccessAction {
  return {
    type: "FETCH_MOVIES_SUCCESS",
    payload: { movies: data.data, moviesCount: data.total },
  };
}

function getMoviesAsync() {
  return async (dispatch, getState) => {
    dispatch(getMoviesRequest());
    try {
      const { query, searchBy, sortBy } = getState().search;
      const response = await moviesService.getMovies({ searchBy, sortBy, search: query });
      dispatch(getMoviesSuccess(response.data));
    } catch (error) {
      dispatch(getMoviesFailure(error.message));
    }
  };
}

function setMoviesQuery(query: string): SetMoviesQueryAction {
  return {
    type: "SET_MOVIES_QUERY",
    payload: query,
  };
}
function setMoviesSortBy(sortBy: string): SetMoviesSortByAction {
  return {
    type: "SET_MOVIES_SORT_BY",
    payload: sortBy,
  };
}
function setMoviesSearchBy(searchBy: string): SetMoviesSearchByAction {
  return {
    type: "SET_MOVIES_SEARCH_BY",
    payload: searchBy,
  };
}

export { getMoviesAsync, setMoviesQuery, setMoviesSortBy, setMoviesSearchBy };
