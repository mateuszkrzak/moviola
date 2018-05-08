import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './ReleaseYear.scss';

class ReleaseYear extends React.Component {
  static defaultProps = {
    releaseDate: 'No release date provided',
  };

  formatYear = date => new Date(date).getFullYear();

  render() {
    return <span styleName="title">{this.formatYear(this.props.releaseDate)} </span>;
  }
}

ReleaseYear.propTypes = {
  releaseDate: PropTypes.string,
};

export default CSSModules(ReleaseYear, styles);
