import { defineConfig } from 'vite'
import { vitePlugins } from './vite/plugin'

export default defineConfig({
  envDir: 'env',
  plugins: vitePlugins()
})