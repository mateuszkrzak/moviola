import React from 'react';

import './App.scss';
import Footer from './common/components/Footer/Footer';
import ErrorBoundary from './common/components/ErrorBoundary/ErrorBoundary';
import SearchPage from './containers/SearchPage/SearchPage';
import MovieDetailsPage from './containers/MovieDetailsPage/MovieDetailsPage';

const App = () => (
  <section styleName="wrapper">
    <ErrorBoundary>
      <SearchPage />
      <Footer />
    </ErrorBoundary>
  </section>
);

export default App;
