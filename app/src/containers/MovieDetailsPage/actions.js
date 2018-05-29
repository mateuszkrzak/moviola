import {
  FETCH_MOVIE_BY_ID_REQUEST,
  FETCH_MOVIE_BY_ID_FAILURE,
  FETCH_MOVIE_BY_ID_SUCCESS,
  FETCH_MOVIES_BY_GENRES_REQUEST,
  FETCH_MOVIES_BY_GENRES_FAILURE,
  FETCH_MOVIES_BY_GENRES_SUCCESS,
} from './action-types';
import moviesService from '../../services/MoviesService';

function getMovieByIdRequest() {
  return {
    type: FETCH_MOVIE_BY_ID_REQUEST,
  };
}

function getMovieByIdFailure(error) {
  return {
    type: FETCH_MOVIE_BY_ID_FAILURE,
    payload: error,
  };
}

function getMovieByIdSuccess(movie) {
  return {
    type: FETCH_MOVIE_BY_ID_SUCCESS,
    payload: movie,
  };
}

function getMoviesByGenresRequest() {
  return {
    type: FETCH_MOVIES_BY_GENRES_REQUEST,
  };
}

function getMoviesByGenresFailure(error) {
  return {
    type: FETCH_MOVIES_BY_GENRES_FAILURE,
    payload: error,
  };
}

function getMoviesByGenresSuccess(movies) {
  return {
    type: FETCH_MOVIES_BY_GENRES_SUCCESS,
    payload: movies,
  };
}

export default function getMovieByIdAndSimilarMoviesAsync(searchValue) {
  return async (dispatch, getState) => {
    dispatch(getMovieByIdRequest());
    try {
      const response = await moviesService.getMovieById(searchValue);
      dispatch(getMovieByIdSuccess(response.data));
      dispatch(getMoviesByGenresRequest());

      try {
        const { genres } = getState().details.movie;

        const similarMoviesResponse = await moviesService.getMoviesByGenres(genres);
        dispatch(getMoviesByGenresSuccess(similarMoviesResponse.data.data));
      } catch (error) {
        dispatch(getMoviesByGenresFailure(error.message));
      }
    } catch (error) {
      dispatch(getMovieByIdFailure(error.message));
    }
  };
}
