import React from 'react';

import './MovieDetailsPage.scss';
import Logo from '../../common/components/Logo/Logo';
import mockedResponse from '../../response.mock';
import MovieList from '../../common/components/MovieList/MovieList';
import MovieListTitle from './MovieListTitle/MovieListTitle';
import MovieDetails from './MovieDetails/MovieDetails';

export default class MovieDetailsPage extends React.Component {
  state = {
    data: mockedResponse.data,
  };

  render() {
    return (
      <div className="page-wrapper">
        <main className="page-header">
          <div styleName="header-wrapper">
            <Logo />
            <button styleName="search-button">Search</button>
          </div>
          <MovieDetails {...this.state.data[0]} />
        </main>
        <MovieListTitle genre={this.state.data[0].genres.join(' & ')} />
        <MovieList movies={this.state.data} />
      </div>
    );
  }
}
