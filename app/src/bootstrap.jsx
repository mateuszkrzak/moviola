import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'typeface-roboto'; // eslint-disable-line
import 'normalize.css';
import './common/styles/global.scss';

import App from './App';
import store from './redux/store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
