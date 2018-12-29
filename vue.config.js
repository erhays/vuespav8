const path = require('path');

module.exports = {
  pluginOptions: {
    'style-resource-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/sass/main.scss')]
    }
  },

  baseUrl: undefined,
  outputDir: undefined,
  assetsDir: 'static',
  runtimeCompiler: true,
  productionSourceMap: undefined,
  parallel: undefined,

  css: {
    modules: true,
    extract: false,
    sourceMap: true
  }
};