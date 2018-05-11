import React from 'react';
import PropTypes from 'prop-types';

import './ReleaseYear.scss';

import formatYear from '../../../../utils/format-year';

export default class ReleaseYear extends React.Component {
  static defaultProps = {
    releaseDate: 'No release date provided',
  };

  static propTypes = {
    releaseDate: PropTypes.string,
  };

  render() {
    return <span styleName="title">{formatYear(this.props.releaseDate)} </span>;
  }
}
