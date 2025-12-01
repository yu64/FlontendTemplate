import { defineConfig } from 'vite'
import UnoCSS from '@unocss/vite'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src')
    }
  },
  plugins: [UnoCSS()]
})
