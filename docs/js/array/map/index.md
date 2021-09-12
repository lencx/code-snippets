## 👉 map

> map() 方法创建一个新数组，其结果是该数组中的每个元素调用一次给定函数后的返回值

### 💠 语法

```js
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
 // Return element for new_array
}[, thisArg])
```

- `callback` - 生成新数组元素的函数，接收一至三个参数
  - `currentValue` - 数组中当前正在处理的元素
  - `index` [可选] - 正在处理的元素在数组中的索引
  - `array` [可选] - 调用 map 方法的数组本身
- `thisArg` [可选] - 当执行回调函数 callback 时，用作 this 的值
- 返回值 - 一个由原数组每个元素执行回调函数的结果组成的新数组

### ✍️ 实现

```js
Array.prototype.myMap = function(callback) {
  arr = [];
  for (var i = 0; i < this.length; i++) {
    arr[i] = callback(this[i], i, this);
  }
  return arr;
}
```

#### 📌 测试

```js
const arr = [1, 2, 3];
const newVal = arr.myMap((i) => Math.pow(i, 2));
console.log(newVal); // [1, 9, 16]
```

---

### 🔗 参考链接

- [[MDN] Array.prototype.map()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
