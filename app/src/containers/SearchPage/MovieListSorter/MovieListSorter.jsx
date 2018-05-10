import React from 'react';

import './MovieListSorter.scss';

const MovieListSorter = () => (
  <div styleName="wrapper">
    <span styleName="title">Sort by</span>
    <span styleName="sort-type">release date</span>
    <span styleName="sort-type active">rating</span>
  </div>
);
export default MovieListSorter;
