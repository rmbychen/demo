const path = require('path')
module.exports = {
  mode: 'development',
  entry: './bin/index.js',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '/dist')
  }
}