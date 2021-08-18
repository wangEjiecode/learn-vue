import { initMixin } from './init.js'

function Vue(options) {
  this._init(options) // 入口方法，用于初始化操作
}

// 写成插件，对原型进行扩展
initMixin(Vue)

export default Vue
