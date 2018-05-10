import React from 'react';
import PropTypes from 'prop-types';

import './Genres.scss';

export default class Genres extends React.Component {
  static defaultProps = {
    genres: [],
  };
  static propTypes = {
    genres: PropTypes.arrayOf(PropTypes.string),
  };

  render() {
    return <span styleName="genre"> {this.props.genres.join(' & ')} </span>;
  }
}
