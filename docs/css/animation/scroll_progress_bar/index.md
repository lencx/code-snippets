# 滚动进度条

创建一个进度条，指示页面滚动百分比

- 使用 `position: fixed` 将滚动进度条置于页面顶部，`z-index` 设置一个较大的值是为了保证元素在页面内容的最上层。
- 使用 `EventTarget.addEventListener()` 和 `Element.scrollTop` 来确定文档的滚动百分比并将其设置为滚动进度条的宽度。

```html
<div id="scroll_progress_bar"></div>
```

```css
body {
  min-height: 200vh;
}

#scroll_progress_bar {
  position: fixed;
  top: 0;
  width: 0%;
  height: 4px;
  background: #7983ff;
  z-index: 10000;
}
```

```js
const scrollProgress = document.getElementById('scroll_progress_bar');
const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
});
```
