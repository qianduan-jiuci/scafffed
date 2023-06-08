import {defineConfig, presetAttributify, presetUno, presetIcons} from 'unocss'
import type { UserConfig } from 'unocss'

export default defineConfig<UserConfig>({
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons()
  ]
})
