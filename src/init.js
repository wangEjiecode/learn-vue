import { initState } from './state'

export function initMixin(Vue) {
  // 初始化
  Vue.prototype._init = function (options) {
    const vm = this
    vm.$options = options

    // 初始化状态（将数据做一个初始化的劫持，当改变数据时，应该更新视图）
    initState(vm)

    // Vue 里面核心特性 响应式数据原理
    // Vue 不完全是一个 MVVM 框架
    // MVVM => 数据变化视图会更新，视图变化数据会被影响，不能跳过数据去更新视图
    // Vue => $refs 可以直接操作DOM
  }
}
