const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  mode: 'production',
  output: {
    filename: 'applicationGeneratorOutputOnly.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: './',
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'applicationLetter.css' }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(jpg|gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            esModule: false,
            name: '[name].[hash].[ext]',
            outputPath: 'assets/images',
          },
        },
      },
      // {
      //   test: /\.css$/i,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: '[name].css',
      //   },
      // },
      // {
      //   test: /\.json$/i,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: '[name].json',
      //   },
      // },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(
            __dirname,
            'src',
            'applicationQuestions.json'
          ),
        },
      ],
    }),
  ],
};
