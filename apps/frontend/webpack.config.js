require('dotenv').config({ path: '../../.env' });

const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const SimpleProgressPlugin = require('simple-progress-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const SRC = path.resolve(__dirname, 'src');
const BUILD = path.resolve(__dirname, '.build');

const baseConfig = {
  output: {
    publicPath: '/',
    // chunkFilename: '[chunkhash].js',
    // sourceMapFilename: '[file].map',
  },
  mode: process.env.NODE_ENV || 'development',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                'react-hot-loader/babel'
              ],
            },
          },
          'awesome-typescript-loader'
        ],
        exclude: [
          /node_modules/,
          /__tests__/,
          /\.story\.tsx?$/,
          /\.stories\.tsx?$/,
          /\.png$/,
        ],
      },
      {
        test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 30000,
              name: '[name].[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(bmp|gif|png|jpg|jpeg)?$/,
        loader: ['url-loader?limit=1024'],
        exclude: [/node_modules/],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
        exclude: [/node_modules/],
      },
    ],
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      inject: true,
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      API_URL: 'http://localhost:3002/api',
      GRAPHQL_URL: null,
    }),
    new webpack.NamedModulesPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: ['node_modules', SRC],
  },
};

const devConfig = merge.smart(baseConfig, {
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack/hot/only-dev-server',
      './src/index.tsx',
    ],
  },
  output: {
    path: BUILD,
    filename: '[name].bundle.js',
  },
  devtool: 'source-map',
  devServer: {
    compress: true,
    historyApiFallback: {
      disableDotRule: true,
    },
    hot: true,
    inline: true,
    port: 3000,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new SimpleProgressPlugin(),
  ],
  watch: true,
});

const productionConfig = merge.smart(baseConfig, {
  entry: {
    app: `${SRC}/index.tsx`,
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: BUILD,
  },
  plugins: [new SimpleProgressPlugin({ format: 'expanded' })],
  optimization: {
    splitChunks: {
      name: true,
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: -10,
        },
      },
    },
    runtimeChunk: true,
  },
});

module.exports = isProduction ? productionConfig : devConfig;
