import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as qs from 'qs';

import './SearchPage.scss';
import Logo from '../../common/components/Logo/Logo';
import SearchBar from './SearchBar/SearchBar';
import SearchFilters from './SearchFilters/SearchFilters';
import MovieList from '../../common/components/MovieList/MovieList';
import MovieListOptions from './MovieListOptions/MovieListOptions';

import getMoviesAsync from './actions';

export class SearchPage extends React.Component {
  state = {
    search: '',
    searchBy: 'title',
    sortBy: '',
  };

  componentDidMount() {
    const query = this.props.location.pathname.replace('/search/', '');

    if (query !== '/') {    
      const searchValues = qs.parse(query);        
      this.setState(searchValues, () => this.getMovies());
    }
  }

  getMovies() {
    const searchValues = this.state;
    this.props.getMoviesAsync(searchValues);

    if (this.state.search !== '') {      
      const suffix = this.props.match.params.query ? '' : 'search/';
      const query = suffix + qs.stringify(searchValues);

      this.props.history.push(query);
    }
  }

  searchValueChangeHandler = (search) => {
    this.setState({ search });
  };

  searchFiltersChangeHandler = (searchBy) => {
    this.setState({ searchBy });
  };

  searchActionHandler = () => {
    this.getMovies();
  };

  sortChangeHandler = (sortBy) => {
    this.setState({ sortBy }, () => this.getMovies());
  };

  render() {
    return (
      <div className="page-wrapper">
        <main className="page-header">
          <Logo />
          <SearchBar value={this.state.search} onChange={this.searchValueChangeHandler} onSubmit={this.searchActionHandler} />
          <div styleName="actions">
            <SearchFilters value={this.state.searchBy} onChange={this.searchFiltersChangeHandler} />
            <button
              onClick={this.searchActionHandler}
              data-qa="search-button"
              className="standard-button"
              styleName="find-button"
            >
              Find
            </button>
          </div>
        </main>
        <MovieListOptions onChange={this.sortChangeHandler} moviesCount={this.props.moviesCount} />
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
