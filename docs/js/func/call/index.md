
## 👉 call

> call() 方法使用一个指定的 `this` 值和单独给出的一个或多个参数来调用一个函数

### 💠 语法

```js
function.call(thisArg, arg1, arg2, ...)
```

#### 🟠 示例

```js
function sayHello(message) {
 console.log(message, this.name);
}
const obj = {
 name: "lencx"
};
sayHello.call(obj, "welcome ");
```

### ✍️ 实现

```js

```

### 📌 测试

```js

```

---

### 🔗 参考链接
