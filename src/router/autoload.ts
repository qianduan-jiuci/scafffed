import type { RouteRecordRaw } from "vue-router";
const layouts = import.meta.globEager('../layouts/*.vue') //获取layouts目录下的所有vue文件
const pages = import.meta.globEager('../pages/**/*.vue') // 获取所有页面

function getRoutes() {
  const routes = [] as RouteRecordRaw[]
  Object.entries(layouts).forEach(([file,module]) => {
      const layoutRoutes = getLayoutRoutes(file,module as {[key: string] : any})
      layoutRoutes.children = getChildrenRoutes(layoutRoutes)
      routes.push(layoutRoutes)
  })
  return routes
}

function getChildrenRoutes(layoutRoute:RouteRecordRaw):RouteRecordRaw[] {
  const childrenRoutes = [] as RouteRecordRaw[]
  Object.entries(pages).forEach(([file, module]) => {
    if(file.includes(`${layoutRoute.path}`))  {
      const routes = getLayoutRoutes(file,module as {[key: string]: any})
      childrenRoutes.push(routes)
    }
  })
  return childrenRoutes
}

function getLayoutRoutes(file:string, module: {[key: string] : any}):RouteRecordRaw {
  const path = file.match(/(layouts|pages)(?<path>\/.+?)\.vue$/i)?.groups?.path as string
  return {
    name: path.replace(/^\//, '').replace(/\//, '-'),
    path,
    component: module.default
  } as RouteRecordRaw
}

export default getRoutes()