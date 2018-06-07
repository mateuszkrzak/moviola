import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Root from './src/Root';
import store from './src/redux/store';
import * as qs from 'qs';

function renderHTML(html, preloadedState) {
  return `
      <!doctype html>
      <html lang=en>
        <head>
          <meta charset=utf-8>
          <title>netflixroulette app</title>
          ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
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
  return (req, res) => {
    const context = {};

    const root = (
      <Root
        context={context}
        location={req.url}
        Router={StaticRouter}
        store={store}
      />
    );

    const htmlString = renderToString(root);

    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
      return;
    }

    const queryParams = req.url.replace('/search/', '');
    const parsedQuery = qs.parse(queryParams);
    
    const preloadedState = {
      ...store.getState(),
      ...parsedQuery
    };

    res.send(renderHTML(htmlString, preloadedState));
  };
}