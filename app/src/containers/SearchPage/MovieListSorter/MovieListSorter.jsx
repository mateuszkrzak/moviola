import React from 'react';

import styles from './MovieListSorter.scss';

const MovieListSorter = () => (
  <div styleName="wrapper">
    <span styleName="title">Sort by</span>
    <a styleName="sort-type">release date</a>
    <a styleName="sort-type" styleName="active">
      rating
    </a>
  </div>
);
export default MovieListSorter;
