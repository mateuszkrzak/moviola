import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './SearchBar.scss';

const SearchBar = () => (
  <React.Fragment>
    <h2>Find your movie</h2>
    <input placeholder="Type something" />
  </React.Fragment>
);
export default CSSModules(SearchBar, styles);
