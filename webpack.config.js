const path = require('path');

module.exports = {
  entry: {
    'giflw-vue-components': './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    library: 'GIFLWVueComponents',
    libraryTarget: 'umd'
  },
  externals: {
  /*    "lodash": {
          commonjs: "lodash",
          commonjs2: "lodash",
          amd: "lodash",
          root: "_"
      } */
  }
};
