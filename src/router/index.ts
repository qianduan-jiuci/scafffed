import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import layoutsRoutes from './autoload'
import type { App } from 'vue'

const router = createRouter({
  history: createWebHistory(),
  routes: Object.assign(routes, layoutsRoutes),
})

export const setupRouter = (app:App) => {
  app.use(router)
}

export default router

