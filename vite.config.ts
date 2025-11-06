import Unfonts from 'unplugin-fonts/vite'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

export default ({ mode }) => {
  // Load environment variables based on the current mode (dev, production, etc.)
  const env = loadEnv(mode, process.cwd(), '')

  // Default fallback values if env variables are missing
  const PWA_NAME = env.VITE_PWA_NAME || 'My Vue App'
  const PWA_THEME_COLOR = env.VITE_PWA_THEME_COLOR || '#8F00FF'
  const PWA_ICON_SRC = env.VITE_PWA_ICON_SRC || 'pwa-512x512.png'

  return defineConfig({
    build: {
      outDir: 'dist', // default, but make sure it's explicit
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    plugins: [
      vue(),
      Unfonts({
        google: {
          families: [
            { name: 'Source Sans Pro' },
            { name: 'Playfair Display SC' },
            { name: 'Source Code Pro' },
            { name: 'Bungee' },
          ],
        },
      }),
      VitePWA({
        registerType: 'autoUpdate',
        injectRegister: 'auto',
        workbox: {
          clientsClaim: true,
          skipWaiting: true,
          globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        },
        devOptions: {
          enabled: true,
        },
        includeAssets: [],
        manifest: {
          name: PWA_NAME,
          theme_color: PWA_THEME_COLOR,
          icons: [
            {
              src: PWA_ICON_SRC,
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: PWA_ICON_SRC,
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
      }),
    ],
  })
}
