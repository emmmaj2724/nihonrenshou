import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/nihonrenshou/',

  plugins: [
    vue(),

    VitePWA({
      manifest: {
        name: 'Nihongo Renshou',
        short_name: 'NihongoRenshou',
        description: 'Japanese Vocabulary Practice App',
        background_color: '#fff',
        theme_color: '#1976d2',

        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },

      workbox: {
        // You can add runtime caching rules here if needed
      },
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})