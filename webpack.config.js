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
  // PLUGINS BELOW REDUCE BUNDLE SIZE FOR PRODUCTION
  plugins: [
    new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
    }),
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: false
    }), //minify
    new webpack.optimize.AggressiveMergingPlugin()//Merging chunks
  ],
  //devtool: 'cheap-module-eval-source-map'
}