import { 
  FETCH_MOVIES_REQUEST, 
  FETCH_MOVIES_FAILURE, 
  FETCH_MOVIES_SUCCESS,
  SET_MOVIES_QUERY,
  SET_MOVIES_SORT_BY,
  SET_MOVIES_SEARCH_BY
} from './action-types';
import moviesService from '../../services/MoviesService';

function getMoviesRequest() {
  return {
    type: FETCH_MOVIES_REQUEST,
  };
}

function getMoviesFailure(error) {
  return {
    type: FETCH_MOVIES_FAILURE,
    payload: error,
  };
}

function getMoviesSuccess(data) {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: { movies: data.data, moviesCount: data.total },
  };
}

function getMoviesAsync() {
  return async (dispatch, getState) => {
    dispatch(getMoviesRequest());
    try {
      const {query, searchBy, sortBy} = getState().search;      
      const response = await moviesService.getMovies({ searchBy, sortBy, search: query});
      dispatch(getMoviesSuccess(response.data));
    } catch (error) {
      dispatch(getMoviesFailure(error.message));
    }
  };
}

function setMoviesQuery(query) {
  return {
    type: SET_MOVIES_QUERY,
    payload: query,
  };
}
function setMoviesSortBy(sortBy) {
  return {
    type: SET_MOVIES_SORT_BY,
    payload: sortBy,
  };
}
function setMoviesSearchBy(searchBy) {
  return {
    type: SET_MOVIES_SEARCH_BY,
    payload: searchBy,
  };
}

export {
  getMoviesAsync,
  setMoviesQuery,
  setMoviesSortBy,
  setMoviesSearchBy
};