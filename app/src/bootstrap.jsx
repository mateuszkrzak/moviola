import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'typeface-roboto'; // eslint-disable-line
import 'normalize.css';
import './common/styles/global.scss';

import App from './App';
import store from './redux/store';
import SearchPage from './containers/SearchPage/SearchPage';
import MovieDetailsPage from './containers/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from './containers/NotFoundPage/NotFoundPage';

render(
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route path="/film/:id" component={MovieDetailsPage} />
          <Route path="/search/:query" component={SearchPage} />          
          <Route path="/" component={SearchPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
