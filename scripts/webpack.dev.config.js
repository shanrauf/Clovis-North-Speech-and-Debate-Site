/* eslint-disable */
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    open: 'chrome',
    stats: 'errors-only',
    port: 8080,
    // host: '0.0.0.0', Uncomment when want to host on your router
    quiet: true
  },
  entry: {
    main: './src/main.js'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.runtime.js',
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css)$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass')
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|ttf|otf|ico)$/i,
        loaders: ['file-loader?name=[path][name].[ext]']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new webpack.EnvironmentPlugin(['NODE_ENV', 'DEBUG']),
    new FriendlyErrorsPlugin(),
    new CopyPlugin([{ from: 'src/assets/images', to: 'assets/images' }], {
      copyUnmodified: true
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      hash: true
    })
  ],
  output: {
    pathinfo: false,
    filename: '[name].js',
    chunkFilename: 'chunks/[chunkhash].chunk.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'all',
          name: 'vendor',
          enforce: true
        }
      }
    }
  }
};
