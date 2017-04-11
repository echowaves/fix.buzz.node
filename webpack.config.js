const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'eval',
  context: __dirname,

  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './app/src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: path.resolve(__dirname, 'node_modules'),
        include: [
          path.resolve(__dirname, 'app'),
          path.resolve(__dirname, 'api')
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
