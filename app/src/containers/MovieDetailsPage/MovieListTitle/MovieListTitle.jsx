import React from 'react';

import './MovieListTitle.scss';

const MovieListTitle = ({ genre = 'No genre provided' }) => (
  <div styleName="wrapper">
    <span styleName="title">Films by {genre} genre</span>
  </div>
);

export default MovieListTitle;
