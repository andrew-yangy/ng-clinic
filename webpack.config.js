const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode:'development',
  entry: {
    content: './src/content',
    core: './src/core',
    background: './src/background'
  },
  devtool: 'source-map',
  cache: true,
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CopyPlugin([
      { from: 'manifest.json', to: 'manifest.json' },
    ]),
  ]
};