import { defineComponent, ref, onMounted, onUnmounted, PropType } from 'vue'

import './index.scss'

export type ScrollProgressProps = {
  root?: string; // default `#app`
  theme?: string; // background color
}

const ScrollProgress = defineComponent({
  props: {
    root: String as PropType<ScrollProgressProps['root']>,
    theme: String as PropType<ScrollProgressProps['theme']>,
  },

  setup(props: ScrollProgressProps) {
    const root = ref(null)
    const appHeight = ref(0)

    const rootNode = props.root || '#app'

    let targetNode = document.querySelector(rootNode)
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

    return () => (
      <div ref={root} style={{ background: props.theme }} id="scroll_progress" />
    )
  }
})

export default ScrollProgress
