import React from 'react';
import PropTypes from 'prop-types';

import styles from './Genres.scss';

class Genres extends React.Component {
  static defaultProps = {
    genres: [],
  };

  formatGenres = genres => genres.join(' & ');

  render() {
    return <span styleName="genre"> {this.formatGenres(this.props.genres)} </span>;
  }
}

Genres.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default Genres;
