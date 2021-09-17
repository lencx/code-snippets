
# 👉 call

> call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数

## 💠 语法

```js
function.call(thisArg, arg1, arg2, ...)
```

## 🟠 示例

```js
function sayHello(message) {
  console.log(message, this.name);
}
const obj = {
  name: 'lencx'
};
sayHello.call(obj, 'welcome'); // welcome lencx
```

示例输出 `welcome lencx`，以上面例子分析一个调用函数的基本原理，我们就会注意到这些：

1. 调用原型函数 `call` 改变了 `this` 的指向。即调用函数变成了 `obj.sayHello`

    ```js
    function sayHello(message) {
      console.log(message, this.name);
    }
    const obj = {
      name: 'lencx',
      sayHello: function(message) {
        console.log(message, this.name);
      }
    };
    obj.sayHello('welcome'); // welcome lencx
    ```

2. 传递给 `sayHello.call` 的任意参数作为 `arg1, arg2, ...` 传递给原始 `sayHello`
3. 不会对 `obj` 和 `sayHello` 产生副作用。即调用 `call` 不会以任何方式修改原始 `obj` 或 `sayHello`

## 🤔 思考

> TODO

## ✍️ 实现

```js

```

## 📌 测试

```js

```

---

## 🔗 参考
