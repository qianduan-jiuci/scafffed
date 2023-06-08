import type { ConfigEnv } from 'vite'
import viteBaseConfig from './vite.base'
import viteDevConfig from './vite.dev'
import viteProdConfig from './vite.prod'
import { parseEnv } from './vite/utils'
import path from 'path'
import {defineConfig, loadEnv} from "vite";

const viteConfig = {
  "serve": () => {
    return {...viteBaseConfig, ...viteDevConfig}
  },
  "build": () => {
    return {...viteBaseConfig, ...viteProdConfig}
  }
}

// https://vitejs.dev/config/
export default defineConfig(({command, mode}:ConfigEnv) => {
  parseEnv(loadEnv(mode, path.join(process.cwd(), 'env')))
  return viteConfig[command]()
})
