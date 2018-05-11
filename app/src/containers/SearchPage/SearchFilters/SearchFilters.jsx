import React from 'react';

import './SearchFilters.scss';

const SearchFilters = () => (
  <div styleName="wrapper">
    <span styleName="title">Search by</span>
    <button className="standard-button">Title</button>
    <button className="standard-button" styleName="active">
      Genre
    </button>
  </div>
);
export default SearchFilters;
