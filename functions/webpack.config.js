var path = require('path');
var nodeExternals = require('webpack-node-externals');
var webpack = require('webpack');

const config = {
  //context: path.resolve(__dirname, "src"),
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  target: 'node', // in order to ignore built-in modules like path, fs, etc. 
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder 
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env'],
        }
      }
    }]
  },
  //mode: 'production'
  mode: 'development'
};

module.exports = config;