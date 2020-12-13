const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    }
  },
  {
    test: /\.svg$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader'
      },
      {
        loader: 'react-svg-loader',
        options: {
          jsx: true
        }
      }
    ]
  }
];

module.exports = {
  module: {
    rules
  },
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
      inject: true
    })
  ],
  resolve: { modules: [path.resolve(__dirname, 'src'), 'node_modules'] }
};