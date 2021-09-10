const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.ts'),
  output: {
    filename: 'wx.js',
    path: path.resolve(__dirname, '../nirvana-frontend/static/runnob'),
    library: 'wx',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                // 设置预定义的环境
                [
                  // 指定环境的插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    targets: {
                      "chrome": "58",
                      "ie": "11"
                    },
                    "corejs": "3",
                    // 使用corejs的方式，usage表示按需加载
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: /@license/i,
          },
        },
        extractComments: true
      }),
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  }
}