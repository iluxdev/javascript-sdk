const webpack = require('webpack');
const { create, entry, name } = require('./common');

const config = create();

config.entry = {
  [`${name}-taro`]: entry,
  [`${name}-taro-min`]: entry,
};
config.resolve.aliasFields = ['taro', 'browser'];
config.plugins.push(
  new webpack.BannerPlugin({
    banner:
      'import Taro from "@tarojs/taro"; \nvar window={};var XMLHttpRequest;var navigator;var localStorage;',
    raw: true,
  })
);

module.exports = config;
