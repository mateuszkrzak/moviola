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
      <div styleName="wrapper">
        <main styleName="header">
          <Logo />
          <SearchBar />
          <div styleName="actions">
            <SearchFilters />
            <button className="standard-button" styleName="find-button">Find</button>
          </div>
        </main>
        <MovieList movies={this.state.data} />
      </div>
    );
  }
}

export default CSSModules(Search, styles);
