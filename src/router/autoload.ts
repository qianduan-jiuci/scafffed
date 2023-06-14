import type { RouteRecordRaw } from "vue-router";
import {env} from "~utils/env.ts";
const layouts = import.meta.globEager('../layouts/*.vue') //获取layouts目录下的所有vue文件
const pages = import.meta.globEager('../pages/**/*.vue') // 获取所有页面

/**
 * @description 获取路由
 * @return RouteRecordRaw[]
 */
function getRoutes() {
  const routes = [] as RouteRecordRaw[]
  Object.entries(layouts).forEach(([file,module]) => {
      const layoutRoutes = getLayoutRoutes(file,module as {[key: string] : any})
      layoutRoutes.children = getChildrenRoutes(layoutRoutes)
      routes.push(layoutRoutes)
  })
  return routes
}

/**
 * @description 获取子路由
 * @param layoutRoute
 * @return RouteRecordRaw[]
 * @author lihaorun
 */
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

/**
 *
 * @description 获取布局路由(父路由)
 * @param file
 * @param module
 * @return RouteRecordRaw
 */
function getLayoutRoutes(file:string, module: {[key: string] : any}):RouteRecordRaw {
  const path = file.match(/(layouts|pages)(?<path>\/.+?)\.vue$/i)?.groups?.path as string
  return {
    name: path.replace(/^\//, '').replace(/\//, '-'),
    path,
    component: module.default
  } as RouteRecordRaw
}

export default env.VITE_AUTOLOAD_ROUTER ? getRoutes() : [] as RouteRecordRaw[]
