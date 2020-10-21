const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development', // production
  devtool: 'eval',     // hidden-source-map => 그냥 source-map하면 개발자 도구에 코드 다 노출됨
  resolve: {
    extensions: ['.jsx', '.js', '.tsx','ts']
  },

  entry: {
    app: './client'
  },

  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader',
    }]
  },

  plugins: [

  ],

  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist',
  }
}