import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './Search.scss';
import Logo from '../../components/Logo/Logo';
import SearchBar from './SearchBar/SearchBar';
import SearchFilters from './SearchFilters/SearchFilters';

const Search = () => (
  <main styleName="wrapper">
    <Logo />
    <SearchBar />
    <SearchFilters />
    <button>Find</button>
  </main>
);
export default CSSModules(Search, styles);
