import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './MovieList.scss';

import MovieElement from './MovieElement/MovieElement';

export default class MovieList extends React.Component {
  static defaultProps = {
    movies: [],
  };

  static propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object),
  };

  render() {
    if (!this.props.movies.length) {
      return <div styleName="no-results">No films found</div>;
    }

    return (
      <div data-qa="movie-list" styleName="list">
        {this.props.movies.map(movie => (
          <Link to={`/film/${movie.id}`} key={movie.id} href={`/film/${movie.id}`}>
            <MovieElement key={movie.id} {...movie} />
          </Link>
        ))}
      </div>
    );
  }
}
