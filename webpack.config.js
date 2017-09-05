const path = require('path');

const webpack = require('webpack');

module.exports = {
  entry : './client/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client', 'public')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
}