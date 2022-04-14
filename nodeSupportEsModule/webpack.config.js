const path = require('path')
module.exports = {
  mode: 'development',
  entry: './bin/index.js',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '/dist')
  },
  target: 'node',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: [
            ['@babel/plugin-transform-runtime', {
              corejs:3,
              regenerator: true,
              useESModules: true,
              helpers: true
            }]
          ]
        }
      }
    }]
  }
}