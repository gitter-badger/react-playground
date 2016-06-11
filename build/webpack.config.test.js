const webpack = require('webpack')

module.exports = {
  debug: false,
  resolve: {
    extensions: [
      '',
      '.js',
      '.scss',
      '.json'
    ]
  },
  output: {
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) })
  ],
  module: {
    loaders: [
      {
        test: /\.json$/,
        loaders: ['json-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file-loader']
      },
      {
        test: /\.(scss|css)$/,
        loaders: ['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]', 'sass-loader']
      },
      {
        test: /\.po$/,
        loader: 'json!po?format=jed1.x&domain=messages'
      }
    ]
  }
}
