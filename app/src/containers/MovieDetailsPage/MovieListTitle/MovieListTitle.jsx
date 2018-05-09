import React from 'react';
import PropTypes from 'prop-types';

import styles from './MovieListTitle.scss';

export default class MovieListTitle extends React.Component {
  static defaultProps = {
    genre: '',
  };

  static propTypes = {
    genre: PropTypes.string,
  };

  render() {
    return (
      <div styleName="wrapper">
        <span styleName="title">Films by {this.props.genre} genre</span>
      </div>
    );
  }
}
