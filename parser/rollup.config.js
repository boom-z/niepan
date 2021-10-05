const path = require('path');
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import RollopPluginTypeScript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';
import { uglify } from 'rollup-plugin-uglify';
import CleanCSS from 'clean-css';
import { writeFileSync } from 'fs'; // 写文件

export default {
  input: path.resolve(__dirname, './src/index.js'),
  output: {
    format: 'iife',
    file: 'dist/wx-parser.js',
    name: 'Page',
    globals: {
      htmlTemplate: 'htmlTemplate',
      he: 'he',
      vue: 'Vue',
    },
    paths: {
      WxUI: path.resolve(__dirname, './static/wxUI.js'),
    },
  },
  external: ['vue', path.resolve(__dirname, './static/wxUI.js')],
  plugins: [
    resolve(),
    commonjs(),
    RollopPluginTypeScript(),
    // css({ output: 'wx-parser.css' }),
    css({
      output(style) {
        // 压缩 css 写入 dist/base-ui.css
        writeFileSync('wx-parser.css', new CleanCSS().minify(style));
      },
    }),
    uglify(),
  ],
};
