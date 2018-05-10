import React from 'react';
import PropTypes from 'prop-types';

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
      <div styleName="list">
        {this.props.movies.map(movie => <MovieElement key={movie.id} movie={movie} />)}
      </div>
    );
  }
}
