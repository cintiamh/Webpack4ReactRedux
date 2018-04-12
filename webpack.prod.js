const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
    ]
  }
});
