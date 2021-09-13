## 👉 sleep

指定时间内函数暂停执行。 在 C 或 PHP 等编程语言中，可以调用 `sleep(2)` 使程序暂停 2 秒。 Java 有 `Thread.sleep(2000)`，Python 有 `time.sleep(2)`，Go 有 `time.Sleep(2 * time.Second)`。

JavaScript 没有原生的休眠功能，但由于引入了 promises（以及 ES2018 中的 `async/await`），我们可以用一种优雅地方式来实现此功能。

### ✍️ 实现

```js
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
```

### 📌 测试

```js
async function testSleep() {
  console.log('Taking a break...');
  await sleep(2000);
  console.log('Two seconds later, showing sleep in a loop...');

  // Sleep in loop
  for (let i = 0; i < 5; i++) {
    if (i === 3) await sleep(2000);
    console.log(i);
  }
}

testSleep();
```

---

### 🔗 参考链接

- [What is the JavaScript version of sleep()?](https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep)
- [[C] sleep(3) - Linux man page](https://linux.die.net/man/3/sleep)
- [[PHP] sleep](https://www.php.net/manual/en/function.sleep.php)
- [[Java] Pausing Execution with Sleep](https://docs.oracle.com/javase/tutorial/essential/concurrency/sleep.html)
- [[Python] time.sleep(secs)](https://docs.python.org/3/library/time.html#time.sleep)
- [[Go] func Sleep](https://pkg.go.dev/time#Sleep)
