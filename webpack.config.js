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
  },
    module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] },
        }],
      },
      // Loaders for other file types can go here
    ]
  }
};
