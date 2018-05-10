import React from 'react';
import PropTypes from 'prop-types';

import './MovieElement.scss';

import Poster from './Poster/Poster';
import Genres from './Genres/Genres';
import Title from './Title/Title';
import ReleaseYear from './ReleaseYear/ReleaseYear';

export default class MovieList extends React.Component {
  static defaultProps = {
    movie: {},
  };

  static propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string,
      release_date: PropTypes.string,
      poster_path: PropTypes.string,
      genres: PropTypes.arrayOf(PropTypes.string),
    }),
  };

  render() {
    return (
      <div styleName="wrapper">
        <Poster src={this.props.movie.poster_path} title={this.props.movie.title} />
        <div styleName="row">
          <Title title={this.props.movie.title} />
          <ReleaseYear releaseDate={this.props.movie.release_date} />
        </div>
        <Genres genres={this.props.movie.genres} />
      </div>
    );
  }
}
