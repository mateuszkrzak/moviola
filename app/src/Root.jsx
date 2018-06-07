import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import 'normalize.css';
import './common/styles/global.scss';

import App from './App';
import SearchPage from './containers/SearchPage/SearchPage';
import MovieDetailsPage from './containers/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from './containers/NotFoundPage/NotFoundPage';

const Root = ({ Router, location, context, store }) => (
  <Provider store={store}>
    <Router location={location} context={context}>
      <App>
        <Switch>
          <Route path="/film/:id" component={MovieDetailsPage} />
          <Route path="/search/:query" component={SearchPage} />
          <Route exact path="/" component={SearchPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </App> 
    </Router>
  </Provider>
);

export default hot(module)(Root);
