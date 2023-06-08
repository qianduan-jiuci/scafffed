import { viteMockServe } from 'vite-plugin-mock'

export const mockPlugin = () => viteMockServe({
  watchFiles: false
})
