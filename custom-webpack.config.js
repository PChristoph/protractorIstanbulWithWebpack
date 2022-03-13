const path = require('path');
const distPath = path.resolve(__dirname, 'dist');
console.log('CUSTOM-WEBPACK.CONFIG wurde geladen. path:', distPath)

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        loader: 'istanbul-instrumenter-loader',
        options: { esModules: true },
        enforce: 'post',
        include: distPath,
        exclude: [
          /\.(e2e|spec)\.ts$/,
          /node_modules/
        ],
      },
    ],
  }
};