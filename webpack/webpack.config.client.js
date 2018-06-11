const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.config.common');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
  name: 'client',
  target: 'web',

  entry: [
    'babel-polyfill',
    isDevMod && 'webpack-hot-middleware/client',
    './app/src/bootstrap.jsx',
  ].filter(Boolean),

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
          'style-loader?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]__[hash:base64:5]',
          'resolve-url-loader',
          'sass-loader?sourceMap',
        ],
      },
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, { loader: 'css-loader' }],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    !isDevMod && new CleanWebpackPlugin('./public', { root: path.resolve(__dirname, '../') }),
    isDevMod && new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ].filter(Boolean),
});
