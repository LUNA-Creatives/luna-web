const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CompressionPlugin = require('compression-webpack-plugin');
// const zlib = require('zlib');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[id].js',
    path: path.join(__dirname, './static'),
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devServer: {
    static: path.resolve(__dirname, './static'),
    hot: true,
    client: {
      logging: 'info',
      progress: true,
    },
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg|webp|blob)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public', 'index.html'),
    }),

    new CompressionPlugin({
      filename: '[name].gz',
      algorithm: 'gzip',
      test: /\.(js|svg|tsx|jsx|ts|png|jpg|blob|webp)$/,

      // compressionOptions: {
      //   params: {
      //     [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
      //   },
      // },
      // threshold: 10240,
      // minRatio: 0.8,
      deleteOriginalAssets: false,
    }),
  ],
};
