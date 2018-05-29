import React from 'react';

import './App.scss';
import Footer from './common/components/Footer/Footer';
import ErrorBoundary from './common/components/ErrorBoundary/ErrorBoundary';

const App = props => (
  <section styleName="wrapper">
    <ErrorBoundary>
      {props.children}
      <Footer />
    </ErrorBoundary>
  </section>
);

export default App;
