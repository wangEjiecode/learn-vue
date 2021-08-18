import { observe } from './observer/index.js'

export function initState(vm) {
  // vm.$options
  const opts = vm.$options
  // 逐个判断，进行初始化
  // 初始化有顺序，会判断重名情况
  if (opts.props) {
    initProps(vm)
  }
  if (opts.methods) {
    initMethods(vm)
  }
  if (opts.data) {
    initData(vm)
  }
  if (opts.computed) {
    initComputed(vm)
  }
  if (opts.watch) {
    initWatch(vm)
  }
}

function initData(vm) {
  // 拿到数据初始化的data
  let data = vm.$options.data
  // data 始终为 对象
  data = typeof data === 'function' ? data.call(vm) : data

  // 数据的劫持方案
  // 对象 Object.defineProperty
  observe(data)
  // 数组 单独处理
}
function initProps() {}
function initMethods() {}
function initWatch() {}
function initComputed() {}
