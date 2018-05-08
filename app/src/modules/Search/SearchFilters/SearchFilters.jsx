import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './SearchFilters.scss';

const SearchFilters = () => (
  <div styleName="wrapper">
    <span styleName="title">Search by</span>
    <button className="standard-button">Title</button>
    <button className="standard-button" styleName="active">Genre</button>
  </div>
);
export default CSSModules(SearchFilters, styles);
