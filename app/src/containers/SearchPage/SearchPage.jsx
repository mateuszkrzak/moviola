import React from 'react';
import { connect } from 'react-redux';

import './SearchPage.scss';
import Logo from '../../common/components/Logo/Logo';
import SearchBar from './SearchBar/SearchBar';
import SearchFilters from './SearchFilters/SearchFilters';
import MovieList from '../../common/components/MovieList/MovieList';
import MovieListOptions from './MovieListOptions/MovieListOptions';

import getMoviesAsync from './actions';

export class SearchPage extends React.Component {
  state = {
    searchValue: '',
    searchBy: 'title',
    sortBy: '',
  };

  getMovies() {
    this.props.getMoviesAsync({
      search: this.state.searchValue,
      searchBy: this.state.searchBy,
      sortBy: this.state.sortBy,
    });
  }

  handleSearchValueChange = (searchValue) => {
    this.setState({ searchValue });
  };

  handleSearchFiltersChange = (searchBy) => {
    this.setState({ searchBy });
  };

  handleSearchButtonClick = () => {
    this.getMovies();
  };

  handleSortChange = (sortBy) => {
    this.setState({ sortBy }, () => this.getMovies());
  };

  render() {
    return (
      <div className="page-wrapper">
        <main className="page-header">
          <Logo />
          <SearchBar onChange={this.handleSearchValueChange} />
          <div styleName="actions">
            <SearchFilters onChange={this.handleSearchFiltersChange} />
            <button
              onClick={this.handleSearchButtonClick}
              data-qa="search-button"
              className="standard-button"
              styleName="find-button"
            >
              Find
            </button>
          </div>
        </main>
        <MovieListOptions onChange={this.handleSortChange} moviesCount={this.props.moviesCount} />
        <MovieList movies={this.props.movies} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.search.movies,
  moviesCount: state.search.moviesCount,
});

export default connect(mapStateToProps, { getMoviesAsync })(SearchPage);
