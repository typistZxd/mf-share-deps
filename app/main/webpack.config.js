const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
module.exports = (env = {}) => ({
  mode: 'development',
  entry: path.resolve(__dirname, './src/main.js'),
  plugins: [
    new ModuleFederationPlugin({
      name: 'main',
      filename: 'remoteEntry.js',
      exposes: {
        './storage': './src/storage'
      },
    }),
    new HtmlWebpackPlugin(),
  ],
  devServer: {
    compress: true,
    port: 3001,
    hot: true,
  },
});
