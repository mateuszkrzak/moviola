import React from 'react';
import PropTypes from 'prop-types';

import styles from './ErrorBoundary.scss';

class ErrorBoundary extends React.Component {
  static defaultProps = {
    children: <div>No children passed to ErrorBoundary</div>,
  };

  static propTypes = {
    children: PropTypes.node,
  };

  state = { error: '', info: '' };

  componentDidCatch(error, info) {
    this.setState({ error, info });
  }

  render() {
    if (this.state.error !== '') {
      return (
        <div className="error">
          <div className="container">
            <span>
              There was error:
              <pre>{this.state.error.message}</pre>
            </span>
            <span>and it occured {this.state.info.componentStack}.</span>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
