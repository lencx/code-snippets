<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  root: String,
  theme: String,
});

const root = ref(null)
const appHeight = ref(0)

const rootNode = props.root || '#app'

const targetNode = document.querySelector(rootNode)
if (!targetNode) throw `'${rootNode}' is invalid`
const config = { attributes: true, childList: false, subtree: true }
const callback = function(mutationsList) {
  // Use traditional 'for loops' for IE 11
  for(let mutation of mutationsList) {
    if (mutation.type === 'attributes') {
      appHeight.value = document.documentElement.scrollHeight
    }
  }
}
const observer = new MutationObserver(callback)
observer.observe(targetNode, config)

const listener = () => {
  const scrollProgress = root.value
  const height = appHeight.value - document.documentElement.clientHeight
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
  scrollProgress.style.width = `${(scrollTop / height) * 100}%`
}

onMounted(() => window.addEventListener('scroll', listener))
onUnmounted(() => window.removeEventListener('scroll', listener))
</script>

<template>
  <div ref="root" :style="{ background: props.theme }" id="scroll_progress" />
</template>

<style scoped>
#scroll_progress {
  position: fixed;
  top: 0;
  width: 0%;
  height: 4px;
  background: #48a5bd;
  z-index: 10000;
}
</style>