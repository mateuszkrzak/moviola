import React from 'react';
import PropTypes from 'prop-types';

import MovieListSorter from '../MovieListSorter/MovieListSorter';
import './MovieListOptions.scss';

export default class MovieListOptions extends React.Component {
  static defaultProps = {
    moviesCount: 0,
    onChange: () => {},
  };

  static propTypes = {
    moviesCount: PropTypes.number,
    onChange: PropTypes.func,
  };

  handleSortOptionChange = (sortOption) => {
    this.props.onChange(sortOption);
  };

  render() {
    const { moviesCount } = this.props;

    return (
      <div styleName="wrapper">
        <span styleName="title">{moviesCount} movies found</span>
        <MovieListSorter onChange={this.handleSortOptionChange} />
      </div>
    );
  }
}
