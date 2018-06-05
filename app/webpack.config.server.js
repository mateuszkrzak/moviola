const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CSSModulesFormat = '[name]_[local]__[hash:base64:5]';

const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  name: 'server',
  target: 'node',
  entry: './app/serverRenderer.js',
  externals: [nodeExternals()],
  output: {
    filename: 'js/serverRenderer.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['env', 'react'],
          plugins: [
            [
              'react-css-modules',
              {
                filetypes: { '.scss': { syntax: 'postcss-scss' } },
                generateScopedName: CSSModulesFormat,
                webpackHotModuleReloading: true,
              },
            ],
            [
              'transform-class-properties',
              {
                spec: true,
              },
            ],
          ],
        },
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader?sourceMap',
          `css-loader?modules&importLoader=1&localIdentName=${CSSModulesFormat}`,
          'resolve-url-loader',
          'sass-loader?sourceMap',
        ],
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: '',
      hash: true,
      template: path.resolve(__dirname, './index.html'),
    }),
  ],
});
