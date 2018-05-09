import React from 'react';

import styles from './MovieDetailsPage.scss';
import Logo from '../../common/components/Logo/Logo';
import mockedResponse from '../../mockedResponse';
import MovieList from '../../common/components/MovieList/MovieList';
import MovieListTitle from './MovieListTitle/MovieListTitle';

export default class MovieDetailsPage extends React.Component {
  state = {
    data: mockedResponse.data,
  };

  render() {
    return (
      <div styleName="wrapper">
        <main styleName="header">
          <Logo />
        </main>
        <MovieListTitle genre={this.state.data[0].genres.join(' & ')} />
        <MovieList movies={this.state.data} />
      </div>
    );
  }
}
