const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    hotOnly: true,
    host: '0.0.0.0',
    port: 3100,
    historyApiFallback: true,
  },
});
