import Axios from 'axios';
import MoviesService, { API_URL } from './MoviesService';

jest.mock('axios');

describe('Movies service', () => {
  it('getMovies should call axios with passed options', async () => {
    Axios.get.mockImplementationOnce(() => ({}));

    MoviesService.getMovies({
      testOption: 'testValue',
      anotherTestOption: 'anotherTestValue',
    });

    expect(Axios.get).toMatchSnapshot();
  });

  it('getMovieById should call axios with passed options', async () => {
    Axios.get.mockImplementationOnce(() => ({}));

    MoviesService.getMovieById(1);
    expect(Axios.get).toMatchSnapshot();
  });

  it('getMoviesByGenres should call axios with passed options', async () => {
    Axios.get.mockImplementationOnce(() => ({}));

    MoviesService.getMoviesByGenres(['Test genre', 'Another test genre']);
    expect(Axios.get).toMatchSnapshot();
  });
});
