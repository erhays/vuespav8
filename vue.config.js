const path = require('path');

module.exports = {
  pluginOptions: {
    'style-resource-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/sass/main.scss')]
    }
  }
};