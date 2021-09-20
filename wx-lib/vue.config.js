const path = require('path');

module.exports = {
  pages: {
    index: {
      entry: 'examples/main.ts'
    }
  },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  }
  //   chainWebpack: config => {
  //     config.module
  //       .rule('ts')
  //       .include.add(path.resolve(__dirname, 'packages')).end()
  //       .use('babel')
  //       .loader('vue-loader')
  //       .tap(options => {
  //         // 修改它的选项...
  //         return options;
  //       });
  //   }
};