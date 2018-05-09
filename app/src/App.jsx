import React from 'react';

import 'typeface-roboto'; // eslint-disable-line
import styles from './App.scss';
import Footer from './common/components/Footer/Footer';
import ErrorBoundary from './common/components/ErrorBoundary/ErrorBoundary';
import Search from './containers/Search/Search';

const App = () => (
  <section styleName="wrapper">
    <ErrorBoundary>
      <Search />
      {/* <MovieDetails /> */}
      <Footer />
    </ErrorBoundary>
  </section>
);

export default App;
