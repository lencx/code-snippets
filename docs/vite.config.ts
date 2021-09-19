// https://github.com/vuejs/vitepress/issues/241#issuecomment-780167185
import vueJsx from '@vitejs/plugin-vue-jsx'
import { VitePWA } from 'vite-plugin-pwa'

export default {
  plugins: [
    vueJsx(),
    VitePWA({
      outDir: '.vitepress/dist',
      manifest: {
        name: '✍️ </>',
        short_name: 'CodeSnippets',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ]
}
