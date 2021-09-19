import { defineComponent, ref, onMounted, onUnmounted, PropType } from 'vue';

import './index.scss'

export type ScrollProgressProps = {
  theme?: string; // background color
}

const ScrollProgress = defineComponent({
  props: {
    theme: String as PropType<ScrollProgressProps['theme']>,
  },

  setup(props: ScrollProgressProps) {
    const root = ref(null)

    const listener = () => {
      const scrollProgress = root.value;
      const height =
        document.documentElement.scrollHeight - document.documentElement.clientHeight

      window.addEventListener('scroll', () => {
        const scrollTop =
          document.body.scrollTop || document.documentElement.scrollTop
        scrollProgress.style.width = `${(scrollTop / height) * 100}%`
      })
    }

    onMounted(() => window.addEventListener('message', listener))
    onUnmounted(() => window.removeEventListener('message', listener))

    return () => (
      <div ref={root} style={{ background: props.theme }} id="scroll_progress" />
    )
  }
});

export default ScrollProgress;
