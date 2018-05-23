import React from 'react';

import './SearchBar.scss';

class SearchBar extends React.Component {
  state = {
    value: '',
  };

  onChange = (e) => {
    this.setState({ value: e.target.value }, () => this.props.onChange(this.state.value));
  };

  render() {
    return (
      <React.Fragment>
        <h2 styleName="title">Find your movie</h2>
        <input
          onChange={this.onChange}
          data-qa="search-bar"
          styleName="search-box"
          placeholder="Type something"
        />
      </React.Fragment>
    );
  }
}
export default SearchBar;
