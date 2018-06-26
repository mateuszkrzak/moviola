// @flow

import moviesService from '../../services/MoviesService';
import type { Movie } from './reducer';
import { 
  FETCH_MOVIES_FAILURE, 
  FETCH_MOVIES_REQUEST, 
  FETCH_MOVIES_SUCCESS, 
  SET_MOVIES_QUERY, 
  SET_MOVIES_SORT_BY, 
  SET_MOVIES_SEARCH_BY,
} from './action-types';

type FetchMoviesRequestAction = {| 
  +type: typeof FETCH_MOVIES_REQUEST 
|};
type FetchMoviesFailureAction = {| 
  +type: typeof FETCH_MOVIES_FAILURE, 
  +payload: string 
|};
type FetchMoviesSuccessAction = {| 
  +type: typeof FETCH_MOVIES_SUCCESS, 
  +payload: { 
    +movies: Array<Movie>,
    +moviesCount: number
  } 
|};
export type SetMoviesQueryAction = {|
  +type: typeof SET_MOVIES_QUERY, 
  +payload: string 
|};
export type SetMoviesSortByAction = {|
  +type: typeof SET_MOVIES_SORT_BY, 
  +payload: string 
|};
export type SetMoviesSearchByAction = {|
  +type: typeof SET_MOVIES_SEARCH_BY, 
  +payload: string 
|};

function getMoviesRequest(): FetchMoviesRequestAction {
  return {
    type: FETCH_MOVIES_FAILURE,
  };
}

function getMoviesFailure(error: string): FetchMoviesFailureAction {
  return {
    type: FETCH_MOVIES_FAILURE,
    payload: error,
  };
}



function getMoviesSuccess({ data, total }: *): FetchMoviesSuccessAction {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: { 
      movies: data, 
      moviesCount: total,
    },
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
    type: SET_MOVIES_QUERY,
    payload: query,
  };
}
function setMoviesSortBy(sortBy: string): SetMoviesSortByAction {
  return {
    type: SET_MOVIES_SORT_BY,
    payload: sortBy,
  };
}
function setMoviesSearchBy(searchBy: string): SetMoviesSearchByAction {
  return {
    type: SET_MOVIES_SEARCH_BY,
    payload: searchBy,
  };
}

export { getMoviesAsync, setMoviesQuery, setMoviesSortBy, setMoviesSearchBy };
