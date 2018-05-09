import React from 'react';
import PropTypes from 'prop-types';

import styles from './Title.scss';

class Title extends React.Component {
  static defaultProps = {
    title: 'No title provided',
  };

  render() {
    return <span styleName="title">{this.props.title} </span>;
  }
}

// const Title = props => <h3 styleName="title">{props.title} </h3>;
Title.defaultProps = {
  title: 'No title provided',
};
Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
