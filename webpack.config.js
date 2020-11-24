const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

const getEnv = () => {
  return process.env.NODE_ENV;
};

const pathConfig = {
  src: './src',
  dist: './dist',
  assets: './src/assets',
  template: 'templates',
};

const apps = {
  home: {
    name: 'home',
    entry: './src/home/index.js',
  },
  login: {
    name: 'login',
    entry: './src/login/index.js',
  },
};

module.exports = {
  mode: 'development',
  entry: {
    home: path.resolve(apps.home.entry),
    login: path.resolve(apps.login.entry),
  },
  output: {
    path: path.resolve(pathConfig.dist),
    filename: `[name]/js/[name].[hash].js`,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '/static/',
            // hmr: getEnv() === 'development',
          },
        }, {
          loader: 'css-loader',
        }],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '/',
            // hmr: getEnv() === 'development',
          },
        }, {
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
        }],
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: 'static/images/[name].[hash:7].[ext]',
        },
      },
      {
        test: /\.(woff2?|ttf|otf|eot|svg)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          esModule: false,
          name: 'static/fonts/[name].[hash:7].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, pathConfig.src),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.BannerPlugin({
      banner: 'hash:[hash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]',
    }),
    new MiniCssExtractPlugin({
      filename: '[name]/[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(path.join(pathConfig.dist, apps.login.name, 'index.html')),
      template: path.resolve(path.join(pathConfig.assets, pathConfig.template, 'index.html')),
      inject: true,
      hash: true,
      minify: {
        removeComments: true, // 去注释
        collapseWhitespace: true, // 压缩空格
        removeAttributeQuotes: true, // 去除属性 标签的 引号  例如 <p id="test" /> 输出 <p id=test/>
      },
      chunks: [apps.login.name],
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(path.join(pathConfig.dist, apps.home.name, 'index.html')),
      template: path.resolve(path.join(pathConfig.assets, pathConfig.template, 'index.html')),
      inject: true,
      hash: true,
      minify: {
        removeComments: true, // 去注释
        collapseWhitespace: true, // 压缩空格
        removeAttributeQuotes: true, // 去除属性 标签的 引号  例如 <p id="test" /> 输出 <p id=test/>
      },
      chunks: [apps.home.name],
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(pathConfig.assets, 'favicon.ico'),
      prefix: 'static/',
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
  ],
  devServer: {
    port: '8081',
    publicPath: '/', // 访问资源加前缀
    historyApiFallback: true, // 当找不到路径的时候，默认加载index.html文件
    hot: true,
    contentBase: [path.join(__dirname, 'home', path.join(__dirname, 'login'))], // 告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要
    compress: true, // 一切服务都启用gzip 压缩：
    proxy: {
      // 接口请求代理
    },
  },
};
