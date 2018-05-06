import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './SearchFilters.scss';

const SearchFilters = () => (
  <React.Fragment>
    <h3>Search by</h3>
    <button>Title</button>
    <button>Genre</button>
  </React.Fragment>
);
export default CSSModules(SearchFilters, styles);
