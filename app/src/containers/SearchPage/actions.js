import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_FAILURE, FETCH_MOVIES_SUCCESS } from './action-types';
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

export default function getMoviesAsync(searchValue) {
  return async (dispatch) => {
    dispatch(getMoviesRequest());
    try {
      const response = await moviesService.getMovies(searchValue);
      dispatch(getMoviesSuccess(response.data));
    } catch (error) {
      dispatch(getMoviesFailure(error.message));
    }
  };
}
