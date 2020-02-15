const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    port: process.env.PORT || 9900,
    hot: true,
    open: true,
    compress: true,
    historyApiFallback: true,
    publicPath: '/',
    overlay: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
})
