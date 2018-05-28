import React from 'react';
import { connect } from 'react-redux';

import './MovieDetailsPage.scss';
import Logo from '../../common/components/Logo/Logo';
import MovieList from '../../common/components/MovieList/MovieList';
import MovieListTitle from './MovieListTitle/MovieListTitle';
import MovieDetails from './MovieDetails/MovieDetails';

import getMovieByIdAndSimilarMoviesAsync from './actions';

export class MovieDetailsPage extends React.Component {
  componentDidMount() {
    this.props.getMovieByIdAndSimilarMoviesAsync(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.getMovieByIdAndSimilarMoviesAsync(this.props.match.params.id);
      window.scrollTo(0, 0);
    }

    return this.props.match.params.id !== prevProps.match.params.id;
  }

  render() {
    return (
      <div className="page-wrapper">
        <main className="page-header">
          <div styleName="header-wrapper">
            <Logo />
            <button styleName="search-button">Search</button>
          </div>
          <MovieDetails {...this.props.movie} />
        </main>
        <MovieListTitle genre={this.props.movie.genres.join(' & ')} />
        <MovieList movies={this.props.similarMovies.data} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  movie: state.details.movie,
  similarMovies: state.details.similarMovies,
});

export default connect(mapStateToProps, { getMovieByIdAndSimilarMoviesAsync })(MovieDetailsPage);
