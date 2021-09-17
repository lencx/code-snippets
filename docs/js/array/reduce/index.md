
# 👉 reduce

> reduce() 方法对数组中的每个元素执行一次 reducer 函数(升序执行)，将其结果汇总为单个返回值

## 💠 语法

```js
arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
```

- `callback` - 为数组中每个元素（如果没有提供 `initialValue` 则使用数组中第一个元素）执行的函数，包含四个参数：
  - `accumulator` - 累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或 `initialValue`（见于下方）
  - `currentValue` - 数组中当前正在处理的元素
  - `index` [可选] - 正在处理的元素在数组中的索引，如果提供了 `initialValue`，则起始索引号为 `0`，否则从索引 `1` 起始
  - `array` [可选] - 调用 reduce 方法的数组本身
- `initialValue` [可选] - 作为第一次调用 `callback` 函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 `reduce` 将报错。
- 返回值 - 函数累计处理的结果

## ✍️ 实现

```js
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
```

## 📌 测试

```js
const arr = [1, 2, 3, 4];
const val = arr.myReduce((acc, cur) => acc + cur);
console.log(val) // 10
```

---

## 🔗 参考

- [[MDN] NodeList.prototype.reduce()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
