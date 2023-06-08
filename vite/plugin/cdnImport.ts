import { Plugin as importToCDN, autoComplete } from 'vite-plugin-cdn-import'

export const CDNImport = () => (
  importToCDN({
    modules: [
      {
        name: 'mockjs',
        var: 'MockJS',
        path: 'https://cdn.jsdelivr.net/npm/mockjs@1.1.0/dist/mock-min.min.js'
      },
      // {
      //   name: 'element-plus',
      //   var: 'elementPlus',
      //   path: 'https://cdn.jsdelivr.net/npm/element-plus@2.3.6/dist/index.full.min.js'
      // },
      autoComplete('lodash'),
      autoComplete('vue'),
      autoComplete('axios'),
    ]
  })
)
