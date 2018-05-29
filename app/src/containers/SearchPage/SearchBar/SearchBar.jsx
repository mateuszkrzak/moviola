import React from 'react';

import './SearchBar.scss';

class SearchBar extends React.Component {
  state = {
    value: '',
  };

  onChangeHandler = (e) => {
    this.setState({ value: e.target.value }, () => this.props.onChange(this.state.value));
  };

  onKeyPressHandler = ({key}) => {
    if (key === 'Enter') {
      this.props.onSubmit();
    }
  };

  render() {
    return (
      <React.Fragment>
        <h2 styleName="title">Find your movie</h2>
        <input
          value={this.props.value}
          onKeyPress={this.onKeyPressHandler}
          onChange={this.onChangeHandler}
          data-qa="search-bar"
          styleName="search-box"
          placeholder="Type something"
        />
      </React.Fragment>
    );
  }
}
export default SearchBar;
