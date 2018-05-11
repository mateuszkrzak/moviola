import React from 'react';
import PropTypes from 'prop-types';

import './MovieElement.scss';

import Poster from './Poster/Poster';
import Genres from './Genres/Genres';
import Title from './Title/Title';
import ReleaseYear from './ReleaseYear/ReleaseYear';

const MovieElement = ({
  title, release_date: releaseDate, poster_path: posterPath, genres,
}) => (
  <div styleName="wrapper">
    <Poster src={posterPath} title={title} />
    <div styleName="row">
      <Title title={title} />
      <ReleaseYear releaseDate={releaseDate} />
    </div>
    <Genres {...genres} />
  </div>
);

MovieElement.defaultProps = {
  title: '',
  release_date: '',
  poster_path: '',
  genres: [],
};

MovieElement.propTypes = {
  title: PropTypes.string,
  release_date: PropTypes.string,
  poster_path: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default MovieElement;
