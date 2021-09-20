const path = require('path');
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import RollopPluginTypeScript from '@rollup/plugin-typescript'

export default {
  input: path.resolve(__dirname, './src/index.js'),
  output: {
    format: 'iife',
    file: 'dist/wx-parser.js',
    name: 'Page',
    // globals: {
    //   "he": "he",
    //   "vue": "Vue"
    // },
    paths: {
      WxUI: path.resolve(__dirname, './static/wxUI.js')
    }
  },
  external: [
    'vue',
    path.resolve(__dirname, './static/wxUI.js')
  ],
  plugins: [
    resolve(),
    commonjs(),
    RollopPluginTypeScript()
  ]
}