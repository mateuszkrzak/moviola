import React from 'react';
import PropTypes from 'prop-types';

import styles from './Poster.scss';

class Poster extends React.Component {
  static defaultProps = {
    title: 'No title provided',
    src: 'http://via.placeholder.com/500x750 ',
  };

  render() {
    return <img styleName="poster" src={this.props.src} alt={`Poster of ${this.props.title}`} />;
  }
}

Poster.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
};

export default Poster;
