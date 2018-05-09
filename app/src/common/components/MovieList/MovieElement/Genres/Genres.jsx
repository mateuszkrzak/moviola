import React from 'react';
import PropTypes from 'prop-types';

import styles from './Genres.scss';

class Genres extends React.Component {
  static defaultProps = {
    genres: [],
  };

  render() {
    return <span styleName="genre"> {this.props.genres.join(' & ')} </span>;
  }
}

Genres.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default Genres;
