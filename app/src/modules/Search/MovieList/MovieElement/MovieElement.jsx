import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './MovieElement.scss';

import Poster from './Poster/Poster';
import Genres from './Genres/Genres';
import Title from './Title/Title';
import ReleaseYear from './ReleaseYear/ReleaseYear';

class MovieList extends React.Component {
  static defaultProps = {
    movie: {},
  };

  render() {
    return (
      <div styleName="wrapper">
        <Poster src={this.props.movie.poster_path} title={this.props.movie.title} />
        <Title title={this.props.movie.title} />
        <ReleaseYear releaseDate={this.props.movie.release_date} />
        <Genres genres={this.props.movie.genres} />
      </div>
    );
  }
}

MovieList.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default CSSModules(MovieList, styles);
