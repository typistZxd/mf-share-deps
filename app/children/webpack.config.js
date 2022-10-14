const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
module.exports = (env = {}) => ({
  mode: 'development',
  entry: path.resolve(__dirname, './src/main.js'),
  plugins: [
    new ModuleFederationPlugin({
      name: 'children',
      filename: 'remoteEntry.js',
      remotes: {
        main: 'main@http://localhost:3001/remoteEntry.js',
      },
    }),
    new HtmlWebpackPlugin(),
  ],
  devServer: {
    compress: true,
    port: 3000,
    hot: true,
  },
});
