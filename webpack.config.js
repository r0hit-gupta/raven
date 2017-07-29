const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/client/src/index.js'),
    output: {
        path:path.join(__dirname, '/client/public/js'),
        filename:'bundle.js'
    },
    resolve: {
        extensions:['.js','.jsx']
    },
    module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader'
      }
    }
  ]
}
};
