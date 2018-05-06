import React from 'react';
import CSSModules from 'react-css-modules';

import 'typeface-roboto'; // eslint-disable-line
import styles from './App.scss';
import Footer from './components/Footer/Footer';
import Search from './modules/Search/Search';

const App = () => (
  <section styleName="wrapper">
    <Search />
    {/* <MovieDetails /> */}
    <Footer />
  </section>
);

export default CSSModules(App, styles);
