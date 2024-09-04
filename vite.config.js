import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/compiled-BpWSa-y3.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      },
      input: resolve(__dirname, 'index.html'),
    },
  },
})

