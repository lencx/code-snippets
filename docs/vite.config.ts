// https://github.com/vuejs/vitepress/issues/241#issuecomment-780167185
import vueJsx from '@vitejs/plugin-vue-jsx'
import { VitePWA } from 'vite-plugin-pwa'

export default {
  plugins: [
    vueJsx(),
    VitePWA({
      outDir: '.vitepress/dist',
      registerType: 'autoUpdate',
      injectRegister: 'inline',
      manifest: {
        name: '✍️ </>',
        short_name: '✍️ </>',
        theme_color: '#3eaf7c',
        icons: [
          {
            src: '/pwa-128x128.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-144x144.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-256x256.png',
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
