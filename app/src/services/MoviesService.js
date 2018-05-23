import Axios from 'axios';

export const API_URL = 'http://react-cdp-api.herokuapp.com/movies';

async function getMovies(options) {
  const response = await Axios.get(API_URL, {
    params: {
      ...options,
      sortOrder: 'desc',
    },
  });

  return response;
}

async function getMoviesByGenres(genres) {
  const params = new URLSearchParams();
  genres.forEach(value => params.append('filter', value));

  const response = await Axios.get(API_URL, { params });

  return response;
}

async function getMovieById(id) {
  const response = await Axios.get(`${API_URL}/${id}`);

  return response;
}

export default { getMovies, getMoviesByGenres, getMovieById };
