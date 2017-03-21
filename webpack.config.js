let
  debug = process.env.NODE_ENV !== 'production',
  webpack = require('webpack');


module.exports = {
  context: __dirname,
  devtool: debug ? 'initial-sourcemap' : null,
  entry: "./test.js",
  output: {
    path: __dirname + '/public/js',
    filename: "bundle.js"
  },
  plugins: debug ? [] : [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
  module: {
    
  }
};