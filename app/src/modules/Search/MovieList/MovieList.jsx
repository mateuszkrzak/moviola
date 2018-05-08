import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './MovieList.scss';

import MovieElement from './MovieElement/MovieElement';

class MovieList extends React.Component {
  static defaultProps = {
    movies: [],
  };

  render() {
    return (
      <div styleName="list">
        {this.props.movies.map(movie => <MovieElement key={movie.id} movie={movie} />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default CSSModules(MovieList, styles);
