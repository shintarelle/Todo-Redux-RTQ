var HTMLWebpackPlugin = require('html-webpack-plugin')
var path = require('path');
module.exports = {
  webpack: {
    plugins: {
      // add: [
      //   new HTMLWebpackPlugin(),
      // ],
    },
    entry: {
      app: './index.js'
    },
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: '[name].js'
    },
  },
};
