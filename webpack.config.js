const path = require('path');

module.exports = {
  entry: './frontend/cattit.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      images: path.resolve(__dirname, 'app', 'assets', 'images'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env', '@babel/react']
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
            name: 'app/assets/images/[contenthash].[ext]',
            },
          },
        ],
      },
    ],
  
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*'],
  },
  
  }