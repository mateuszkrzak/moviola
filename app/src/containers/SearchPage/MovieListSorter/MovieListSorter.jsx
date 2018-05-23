import React from 'react';

import './MovieListSorter.scss';

class MovieListSorter extends React.Component {
  state = {
    selectedFilter: 'title',
  };

  onClickHandler = (e) => {
    const selectedFilter = e.target.innerHTML.toLowerCase().replace(' ', '_');

    this.setState({ selectedFilter }, () => {
      const properlyNamedFilter =
        this.state.selectedFilter === 'rating' ? 'vote_average' : 'release_date';
      this.props.onChange(properlyNamedFilter);
    });
  };

  isActive(filter) {
    return this.state.selectedFilter === filter ? 'active' : '';
  }

  render() {
    return (
      <div styleName="wrapper">
        <span styleName="title">Sort by</span>
        <button
          onClick={this.onClickHandler}
          styleName={`sort-type ${this.isActive('release_date')}`}
        >
          release date
        </button>

        <button onClick={this.onClickHandler} styleName={`sort-type ${this.isActive('rating')}`}>
          rating
        </button>
      </div>
    );
  }
}

export default MovieListSorter;
