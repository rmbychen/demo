# 让node支持esmodule

- CommonJs
  ```
   加载： require
   输出： mudule.exports / exports.x
  ```

- ES Modules
```
  加载 import
  输出： export default / export function/const
```

## 方案一 webpack
1、```yarn add webpack webpack-cli```
2、创建webpack配置文件
```
const path = require('path')
module.exports = {
  entry: './bin/index.js',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '/dist')
  }
}
```
3、执行yarn build 打包
4、本地执行npm link将脚手架命令放到node的node_modules里
5、执行cl-cli 就会打印utils


webpack 默认target是web, 所以node的内置库不支持， 比如会报错如下
需要将webpack.config.js中配置target:node


// 此时如果用esNext 比较新的语法  打包的版本是不会转义的，在node低版本下会报错，所以需要引入babel转义
```
npm install -D babel-loader @babel/core @babel/preset-env
// 在webpack.config.js配置
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules|dist/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  }

```
## 方案二： node原生支持（更简单）
1、后缀名用.mjs
2、执行 node --experimental-modules src/experiment.mjs
3、import引入的时候也要加上后缀名
