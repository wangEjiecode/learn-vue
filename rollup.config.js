import babel from 'rollup-plugin-babel'
import serve from 'rollup-plugin-serve'

export default {
  input: './src/index.js', // 入口 以这个入口打包库
  output: {
    format: 'umd', // 表示模块化的类型
    name: 'Vue', // 全局变量的名字
    file: 'dist/umd/vue.js',
    sourcemap: true,
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    serve({
      port: 3000, // 打开的浏览器 端口号是 3000
      contentBase: '',
      openPage: '/index.html', // 打开时的页面
    }),
  ],
}
