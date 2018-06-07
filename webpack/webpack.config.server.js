const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.config.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  name: 'server',
  target: 'node',
  entry: ['babel-polyfill', './app/serverRenderer.js'],
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
                generateScopedName: '[name]_[local]__[hash:base64:5]',
                webpackHotModuleReloading: true,
                removeImport: true,
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
        include: /app/,
        loaders: [
          `css-loader/locals?modules=true&localIdentName=[name]_[local]__[hash:base64:5]`,
          'resolve-url-loader',
          'sass-loader?sourceMap',
        ],
      },
      {
        test: /\.css$/,
        include: /src/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
        ],
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
});
