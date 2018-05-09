import React from 'react';
import PropTypes from 'prop-types';

import MovieListSorter from '../MovieListSorter/MovieListSorter'
import styles from './MovieListOptions.scss';

export default class MovieListOptions extends React.Component {
  static defaultProps = {
    moviesCount: 0,
  };

  static propTypes = {
    moviesCount: PropTypes.number,
  };

  render() {
    const {moviesCount} = this.props;

    return (
      <div styleName="wrapper">
        <span styleName="title">{moviesCount} movies found</span>
        <MovieListSorter />
      </div>
    );
  }
}
