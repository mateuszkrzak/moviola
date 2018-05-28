const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CSSModulesFormat = '[name]_[local]__[hash:base64:5]';

module.exports = env => ({
  entry: ['babel-polyfill', './app/src/bootstrap.jsx'],

  mode: env.production ? 'production' : 'development',

  devtool: env.development ? 'source-map' : '',

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  output: {
    filename: 'main.js',
    path: path.join(__dirname, './'),
    publicPath: '/',
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
      title: '#2 Webpack',
      hash: true,
      template: path.resolve(__dirname, './index.html'),
    }),
  ],

  devServer: env.development
    ? {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
      historyApiFallback: true,
    }
    : {},
});
