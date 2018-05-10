import React from 'react';

import './SearchPage.scss';
import Logo from '../../common/components/Logo/Logo';
import SearchBar from './SearchBar/SearchBar';
import SearchFilters from './SearchFilters/SearchFilters';
import mockedResponse from '../../mockedResponse';
import MovieList from '../../common/components/MovieList/MovieList';
import MovieListOptions from './MovieListOptions/MovieListOptions';

export default class SearchPage extends React.Component {
  state = {
    data: mockedResponse.data,
  };

  render() {
    return (
      <div className="page-wrapper">
        <main className="page-header">
          <Logo />
          <SearchBar />
          <div styleName="actions">
            <SearchFilters />
            <button className="standard-button" styleName="find-button">
              Find
            </button>
          </div>
        </main>
        <MovieListOptions moviesCount={this.state.data.length} />
        <MovieList movies={this.state.data} />
      </div>
    );
  }
}
