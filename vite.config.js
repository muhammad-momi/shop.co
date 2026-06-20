import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [tailwindcss()],

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        buy: resolve(__dirname, 'buy.html'),
        category: resolve(__dirname, 'public/catogory.html'),
      },
    },
  },
})