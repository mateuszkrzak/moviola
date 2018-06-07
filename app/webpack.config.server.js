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
  plugins: [
    new HtmlWebpackPlugin({
      title: '',
      hash: true,
      template: path.resolve(__dirname, './index.html'),
    }),
  ],
});
