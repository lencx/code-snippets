Array.prototype.myReduce = function(callback, initialVal) {
  // 初始值是一个可选参数
  var accumulator = initialVal || undefined;
  // TODO: 未处理边界情况，详情可查看 MDN 文档
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#polyfill
  // 1. 如果 callback 为 null 或非 function，则报错
  // 2. 如果数组为空，并且不存在初始值，则报错
  for (var i = 0; i < this.length; i++) {
    if (accumulator) {
      accumulator = callback.call(accumulator, accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
}