# 👉 filter

> filter() 方法创建一个新数组, 返回符合函数的条件的所有元素。

## 💠 语法

```js
var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
```

- `callback` - 用来检测数组的每个元素的函数，返回 `true` 表示该元素通过检测，保留元素，`false` 则舍弃，接收一至三个参数：
  - `element` - 数组中当前正在处理的元素
  - `index` [可选] - 正在处理的元素在数组中的索引
  - `array` [可选] - 调用 filter 方法的数组本身
- `thisArg` [可选] - 当执行回调函数 callback 时，用作 this 的值
- 返回值 - 一个新的、由通过检测的元素组成的数组，如果没有任何数组元素通过检测，则返回空数组。

## ✍️ 实现

```js
Array.prototype.myFilter = function (callback, context) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};
```

## 📌 测试

```js
const arr = [1, 2, 3, 4, 5];
const newVal = arr.myFilter((i) => i > 3);
console.log(newVal); // [4, 5]
```

---

## 🔗 参考

- [[MDN] Array.prototype.filter()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
