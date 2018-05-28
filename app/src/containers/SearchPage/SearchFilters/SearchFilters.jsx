import React from 'react';

import './SearchFilters.scss';

class SearchFilters extends React.Component {
  state = {
    selectedFilter: 'title',
  };

  clickHandler = (e) => {
    const selectedFilter = e.target.innerHTML.toLowerCase();

    this.setState({ selectedFilter }, () => this.props.onChange(this.state.selectedFilter));
  };

  isActive(filter) {
    return this.state.selectedFilter === filter ? 'active' : '';
  }

  static getDerivedStateFromProps(props, state) {
    return {
      selectedFilter: props.value === 'genres' ? 'genres' : 'title',
    }
  }

  render() {
    return (
      <div styleName="wrapper">
        <span styleName="title">Search by</span>
        <button
          onClick={this.clickHandler}
          className="standard-button"
          styleName={this.isActive('title')}
        >
          Title
        </button>
        <button
          onClick={this.clickHandler}
          className="standard-button"
          styleName={this.isActive('genres')}
        >
          Genres
        </button>
      </div>
    );
  }
}
export default SearchFilters;
