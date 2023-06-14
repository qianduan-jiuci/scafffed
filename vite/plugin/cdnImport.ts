import { Plugin as importToCDN, autoComplete } from 'vite-plugin-cdn-import'

export const CDNImport = () => (
  importToCDN({
    modules: [
      {
        name: 'mockjs',
        var: 'MockJS',
        path: 'https://cdn.jsdelivr.net/npm/mockjs@1.1.0/dist/mock-min.min.js'
      },
      autoComplete('lodash'),
      autoComplete('axios'),
    ]
  })
)
