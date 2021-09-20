<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  root: {
    type: String,
    default: '#app',
    required: false,
  },
  height: {
    type: String,
    default: '4px',
    required: false,
  },
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
  zIndex: {
    type: [Number, String],
    default: 10000,
    required: false,
    validator: (v: string) => /^-?[\d]+$/.test(v),
  },
})

const el = ref(null)
const appHeight = ref(0)

onMounted(() => {
  // Select the node that will be observed for mutations
  const targetNode = document.querySelector(props.root)
  if (!targetNode) return console.error(`[ScrollProgress(root)] '${props.root}' is invalid`)
  // Options for the observer (which mutations to observe)
  const config = { attributes: true, childList: false, subtree: true }
  // Create an observer instance linked to the callback function
  const observer = new MutationObserver((mutationsList: MutationRecord[]) => {
    // Use traditional 'for loops' for IE 11
    for(let mutation of mutationsList) {
      if (mutation.type === 'attributes') {
        appHeight.value = document.documentElement.scrollHeight
      }
    }
  })
  // Start observing the target node for configured mutations
  observer.observe(targetNode, config)
})

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
