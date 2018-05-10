import React from 'react';
import PropTypes from 'prop-types';

import './Title.scss';

export default class Title extends React.Component {
  static defaultProps = {
    title: 'No title provided',
  };
  static propTypes = {
    title: PropTypes.string,
  };
  render() {
    return <span styleName="title">{this.props.title} </span>;
  }
}
