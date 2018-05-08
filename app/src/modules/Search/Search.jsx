import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './Search.scss';
import Logo from '../../components/Logo/Logo';
import SearchBar from './SearchBar/SearchBar';
import SearchFilters from './SearchFilters/SearchFilters';
import mockedResponse from './mockedResponse';
import MovieList from './MovieList/MovieList';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: mockedResponse.data,
    };
  }

  render() {
    return (
      <React.Fragment>
        <main styleName="wrapper">
          <Logo />
          <SearchBar />
          <SearchFilters />
          <button>Find</button>
        </main>
        <MovieList movies={this.state.data} />
      </React.Fragment>
    );
  }
}

export default CSSModules(Search, styles);
