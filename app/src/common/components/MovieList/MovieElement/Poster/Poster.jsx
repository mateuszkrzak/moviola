import React from 'react';
import PropTypes from 'prop-types';

import './Poster.scss';

export default class Poster extends React.Component {
  static defaultProps = {
    title: 'No title provided',
    src: 'http://via.placeholder.com/500x750 ',
  };

  static propTypes = {
    title: PropTypes.string,
    src: PropTypes.string,
  };

  render() {
    return <img styleName="poster" src={this.props.src} alt={`Poster of ${this.props.title}`} />;
  }
}
