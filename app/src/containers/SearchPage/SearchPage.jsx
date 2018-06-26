// @flow

import React from 'react';
import { connect } from 'react-redux';
import * as qs from 'qs';

import './SearchPage.scss';
import Logo from '../../common/components/Logo/Logo';
import SearchBar from './SearchBar/SearchBar';
import SearchFilters from './SearchFilters/SearchFilters';
import MovieList from '../../common/components/MovieList/MovieList';
import MovieListOptions from './MovieListOptions/MovieListOptions';

import { getMoviesAsync, setMoviesQuery, setMoviesSearchBy, setMoviesSortBy } from './actions';
import type { SetMoviesQueryAction, SetMoviesSortByAction, SetMoviesSearchByAction } from './actions';

import type { Movie } from './reducer';
import type { Location, Match, RouterHistory } from 'react-router';

type RouterProps = {|
  +location: Location,
  +match: Match,
  +history: RouterHistory,
  +query: string,
|}
type StoreProps = {|
  +search: string,
  +searchBy: string,
  +sortBy: string,
  +movies: Movie,
  +moviesCount: number,
|}
type ActionProps = {|
  +setMoviesQuery: (string) => SetMoviesQueryAction,
  +setMoviesSearchBy: (string) => SetMoviesSearchByAction,
  +setMoviesSortBy: (string) => SetMoviesSortByAction,
  +getMoviesAsync: () => void,
|}
type Props = RouterProps & StoreProps & ActionProps;

export class SearchPage extends React.Component<Props> {
  componentDidMount() {
    const query = this.props.location.pathname.replace('/search/', '');

    if (query !== '/' && this.props.query === '') {    
      const searchValues = qs.parse(query);        
      this.props.setMoviesQuery(searchValues.search);
      this.props.setMoviesSearchBy(searchValues.searchBy);
      this.props.setMoviesSortBy(searchValues.sortBy);
      this.getMovies();
      }
  }

  getMovies() {
    this.props.getMoviesAsync();

    if (this.props.search !== '') {      
      const suffix = this.props.match.params.query ? '' : 'search/';
      const query = suffix + qs.stringify({
        search: this.props.search,
        searchBy: this.props.searchBy,
        sortBy: this.props.sortBy,
      });

      this.props.history.push(query);
    }
  }

  searchValueChangeHandler = (search: string) => {
    this.props.setMoviesQuery(search);
  };

  searchFiltersChangeHandler = (searchBy: string) => {
    this.props.setMoviesSearchBy(searchBy);
  };

  searchActionHandler = () => {
    this.getMovies();
  };

  sortChangeHandler = (sortBy: string) => {
    this.props.setMoviesSortBy(sortBy);
    this.getMovies();
  };

  render() {
    return (
      <div className="page-wrapper">
        <main className="page-header">
          <Logo />
          <SearchBar value={this.props.search} onChange={this.searchValueChangeHandler} onSubmit={this.searchActionHandler} />
          <div styleName="actions">
            <SearchFilters value={this.props.searchBy} onChange={this.searchFiltersChangeHandler} />
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
  search: state.search.query,
  searchBy: state.search.searchBy,
  sortBy: state.search.sortBy,
});

export default connect(mapStateToProps, { getMoviesAsync, setMoviesQuery, setMoviesSearchBy, setMoviesSortBy })(SearchPage);
