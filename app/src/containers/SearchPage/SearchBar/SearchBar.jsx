import React from 'react';

import './SearchBar.scss';

const SearchBar = () => (
  <React.Fragment>
    <h2 styleName="title">Find your movie</h2>
    <input data-qa="search-bar" styleName="search-box" placeholder="Type something" />
  </React.Fragment>
);
export default SearchBar;
