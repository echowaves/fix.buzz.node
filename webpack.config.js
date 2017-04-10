module.exports = {
  devtool: 'source-map',
  entry:  __dirname + "/app/src/index.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js",
    publicPath: __dirname + "/build",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
}
