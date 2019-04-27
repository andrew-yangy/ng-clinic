const path = require('path');

module.exports = {
  entry: {
    'content': ['./src/content'],
    'background': ['./src/background']
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
  }
};