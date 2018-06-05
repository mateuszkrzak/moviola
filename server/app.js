const express = require('express');
const clientConfig = require('./app/webpack.config.client');
const serverConfig = require('./app/webpack.config.server');

const app = express();

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
  const webpackConfig = [clientConfig, serverConfig];

  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler.compilers.find(c => c.name === 'client')));
  app.use(webpackHotServerMiddleware(compiler));
} else {
  const serverRenderer = require('../public/js/serverRenderer').default;

  app.use(express.static('public'));
  app.use(serverRenderer());
}

module.exports = app;
