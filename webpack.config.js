const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
  context: __dirname,
  mode: 'development',
  entry: {
    index: { import: './src/index.js', dependOn: 'shared' },
    app: { import: './src/App.js', dependOn: 'shared' },
    new: { import: './src/new.js', dependOn: 'shared' },
    shared: 'lodash.get',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|j?g|svg|gif)$/,
        use: 'file-loader?name=./images/[name].[ext]',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
    }),
  ],
};
