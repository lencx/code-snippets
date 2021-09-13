
## 👉 forEach

> forEach() 方法对数组的每个元素执行一次给定的函数

### 💠 语法

```js
arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
```

- `callback` - 为数组中每个元素执行的函数，接收一至三个参数：
  - `currentValue` - 数组中当前正在处理的元素
  - `index` [可选] - 正在处理的元素在数组中的索引
  - `array` [可选] - 调用 forEach 方法的数组本身
- `thisArg` [可选] - 当执行回调函数 callback 时，用作 this 的值。
- 返回值 - `undefined`

### ⚠️ 注意

除了抛出异常以外，没有办法中止或跳出 forEach() 循环

### ✍️ 实现

```js
Array.prototype.myEach = function(callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
}
```

### 📌 测试

```js
const arr = ['js', 'css', 'html'];
arr.myEach((item) => console.log(item))
```

---

### 🔗 参考链接

- [[MDN] NodeList.prototype.forEach()](https://developer.mozilla.org/zh-CN/docs/Web/API/NodeList/forEach)
- [[MDN] Array.prototype.forEach()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
