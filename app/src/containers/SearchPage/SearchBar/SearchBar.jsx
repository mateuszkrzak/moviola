import React from 'react';

import styles from './SearchBar.scss';

const SearchBar = () => (
  <React.Fragment>
    <h2 styleName="title">Find your movie</h2>
    <input styleName="search-box" placeholder="Type something" />
  </React.Fragment>
);
export default SearchBar;
