import vue from '@vitejs/plugin-vue'
import checker from 'vite-plugin-checker'
import UnoCSS from 'unocss/vite'
import { ViteAliases } from 'vite-aliases'
import { CDNImport } from './cdnImport'
import { mockPlugin } from './mock'
import type { PluginOption } from 'vite'

export const vitePlugins = ():PluginOption[] => (
  [
    vue(),
    UnoCSS(),
    checker({ 
      typescript: true
    }),
    ViteAliases(),
    mockPlugin(),
    CDNImport()
  ]
)