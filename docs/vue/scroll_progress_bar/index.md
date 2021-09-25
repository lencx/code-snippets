# 滚动进度条

创建一个进度条，用来指示页面滚动百分比，主要有两点注意事项及一个思考：

- 使用 `position: fixed` 将滚动进度条置于页面顶部，`z-index` 设置一个较大的值是为了保证元素在页面内容的最上层。
- 使用 `EventTarget.addEventListener()` 和 `Element.scrollTop` 来确定文档的滚动百分比并将其设置为滚动进度条的宽度。
- 思考 - 如果页面容器高度发生变化，会发生什么？

## 💠 核心

```html
<div id="scroll_progress_bar"></div>
```

```css
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
// 滚动条高度
const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  // 当前进度条进度 = 当前滚动条位置 / 滚动条高度
  scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
});
```

## ✍️ 实现

`ScrollProgress.vue`

```vue
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// 在 `<script setup>` 标签下要使用 `props`，则需要使用 `defineProps` 进行声明
const props = defineProps({
  // 滚动容器 - 如果容器高度会发生变化，则需要对其进行监听，否则会滚动进度会出现计算误差
  root: {
    type: String,
    default: '#app',
    required: false,
  },
  // 滚动条的高度
  height: {
    type: String,
    default: '4px',
    required: false,
  },
  // 滚动条颜色
  theme: {
    type: String,
    default: '#3eaf7c',
    required: false,
    validator: (v: string) => {
      document.head.style.color = v
      const q = document.head.style.color
      document.head.style.color = ''
      return !!q
    },
  },
  // 滚动条放置的位置：顶部或底部
  placement: {
    type: String,
    default: 'top',
    required: false,
    validator: (v: string) => {
      if (!['top', 'bottom'].includes(v)) {
        console.error(`[ScrollProgress(placement)] The value must match one of these strings: 'top' | 'bottom'`)
        return false
      }
      return true
    },
  },
  // 滚动条在页面中的层级
  zIndex: {
    type: [Number, String],
    default: 10000,
    required: false,
    validator: (v: string) => /^-?[\d]+$/.test(v),
  },
})

const el = ref(null)
const appHeight = ref(0)

// 为了避免进度条因页面容器高度变化导致计算偏差，需要对页面容器进行监听，动态获取其高度
onMounted(() => {
  // 需要观察变动的节点
  const targetNode = document.querySelector(props.root)
  if (!targetNode) return console.error(`[ScrollProgress(root)] '${props.root}' is invalid`)
  // 观察器的配置（需要观察什么变动）
  const config = { attributes: true, childList: false, subtree: true }
  // 创建一个观察器实例并传入当观察到变动时执行的回调函数
  const observer = new MutationObserver((mutationsList: MutationRecord[]) => {
    // Use traditional 'for loops' for IE 11
    for(let mutation of mutationsList) {
      if (mutation.type === 'attributes') {
        appHeight.value = document.documentElement.scrollHeight
      }
    }
  })
  // 开始观察目标节点
  observer.observe(targetNode, config)
})

// 滚动事件执行的回调函数
const listener = () => {
  const scrollProgress = el.value
  const height = appHeight.value - document.documentElement.clientHeight
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
  scrollProgress.style.width = `${(scrollTop / height) * 100}%`
}

onMounted(() => window.addEventListener('scroll', listener))
onUnmounted(() => window.removeEventListener('scroll', listener))

const style: any = {
  background: props.theme,
  zIndex: props.zIndex,
  height: props.height,
}

if (props.placement === 'top') style.top = 0
if (props.placement === 'bottom') style.bottom = 0

// 在 `<script setup>` 标签下显式公开属性，则需要使用 `defineExpose`
defineExpose({ style })
</script>

<template>
  <div id="scroll_progress" ref="el" :style="style" />
</template>

<style scoped>
#scroll_progress {
  position: fixed;
  width: 0%;
  transition: width 300ms ease-out;
}
</style>
```

---

## 🔗 参考

- [[MDN] Document: scroll event](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/scroll_event) - 文档视图或者一个元素在滚动时，会触发元素的scroll事件。
- [[MDN] MutationObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver) - 接口提供了监视对 `DOM树` 所做更改的能力。它被设计为旧的 `Mutation Events` 功能的替代品，该功能是 `DOM3 Events` 规范的一部分。
- [Vue3 API](https://v3.vuejs.org/)
  - [props](https://v3.vuejs.org/api/options-data.html#props)
  - [\<script setup\>](https://v3.vuejs.org/api/sfc-script-setup.html#basic-syntax)
  - [Lifecycle Hooks](https://v3.vuejs.org/api/composition-api.html#lifecycle-hooks)
  - [defineProps and defineEmits](https://v3.vuejs.org/api/sfc-script-setup.html#defineprops-and-defineemits)
  - [defineExpose](https://v3.vuejs.org/api/sfc-script-setup.html#defineexpose)
