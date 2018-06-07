const path = require('path');
const webpack = require('webpack');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = {
  mode: process.env.NODE_ENV,

  output: {
    filename: 'js/[name].js',
    path: path.resolve('./public'),
  },

  resolve: {
    extensions: ['.js', '.jsx'],
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
            // [
            //   'react-css-modules',
            //   {
            //     filetypes: { '.scss': { syntax: 'postcss-scss' } },
            //     generateScopedName: '[name]_[local]__[hash:base64:5]',
            //     webpackHotModuleReloading: true,
            //   },
            // ],
            [
              'transform-class-properties',
              {
                spec: true,
              },
            ],
          ],
        },
      },
      // {
      //   test: /\.scss$/,
      //   loaders: [
      //     'style-loader?sourceMap',
      //     `css-loader?modules&importLoader=1&localIdentName='[name]_[local]__[hash:base64:5]'`,
      //     'resolve-url-loader',
      //     'sass-loader?sourceMap',
      //   ],
      // },
      // {
      //   test: /\.css$/,
      //   use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      // },
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
    isDevMod ? new webpack.NamedModulesPlugin() : new webpack.HashedModuleIdsPlugin(),
  ],
};
