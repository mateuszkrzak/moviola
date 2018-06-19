import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Root from './Root';
import { getStore } from './redux/store';

const rootElement = document.getElementById('root');
if (rootElement === null) {
  throw new Error('no root element');
}

const store = getStore();
const root = (
  <Root
    Router={BrowserRouter}
    store={store}
  />
);

hydrate(root, rootElement);
