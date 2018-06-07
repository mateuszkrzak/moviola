import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
// import 'typeface-roboto'; // eslint-disable-line
// import 'normalize.css';
// import './common/styles/global.scss';

// import App from './App';
// import SearchPage from './containers/SearchPage/SearchPage';
// import MovieDetailsPage from './containers/MovieDetailsPage/MovieDetailsPage';
// import NotFoundPage from './containers/NotFoundPage/NotFoundPage';
import store from './redux/store';

const Root = () => (
  <Provider store={store}>
    <Router>
      {/* <App>
        <Switch>
          <Route path="/film/:id" component={MovieDetailsPage} />
          <Route path="/search/:query" component={SearchPage} />
          <Route exact path="/" component={SearchPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </App> */}
    </Router>
  </Provider>
);

export default hot(module)(Root);
