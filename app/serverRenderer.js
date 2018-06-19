import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import * as qs from 'qs';

import Root from './src/Root';
import { getInitialStore } from './src/redux/store';
import {
  setMoviesQuery,
  setMoviesSearchBy,
  setMoviesSortBy,
  getMoviesAsync,
} from './src/containers/SearchPage/actions';
import getMovieByIdAndSimilarMoviesAsync from './src/containers/MovieDetailsPage/actions';

function renderHTML(html, preloadedState) {
  return `
      <!doctype html>
      <html lang=en>
        <head>
          <meta charset=utf-8>
          <title>netflixroulette app</title>
          ${
  process.env.NODE_ENV === 'development'
    ? ''
    : '<link href="/css/main.css" rel="stylesheet" type="text/css">'
}
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return async (req, res) => {
    const store = getInitialStore();

    if (req.url.match(/\/search\//)) {
      const queryParams = req.url.replace('/search/', '');
      const parsedQuery = qs.parse(queryParams);

      store.dispatch(setMoviesQuery(parsedQuery.search));
      store.dispatch(setMoviesSearchBy(parsedQuery.searchBy));
      store.dispatch(setMoviesSortBy(parsedQuery.sortBy));
      await store.dispatch(getMoviesAsync());
    }

    if (req.url.match(/\/film\//)) {
      const [, id] = req.url.match(/^\/film\/(\d+)/);

      await store.dispatch(getMovieByIdAndSimilarMoviesAsync(id));
    }

    const context = {};
    const root = <Root context={context} location={req.url} Router={StaticRouter} store={store} />;
    const htmlString = renderToString(root);

    res.send(renderHTML(htmlString, store.getState()));
  };
}
