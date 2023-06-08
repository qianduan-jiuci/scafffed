import type { RouteRecordRaw } from "vue-router";

export const routes = [
  {
    path: '/',
    component: () => import("~layouts/admin.vue"),
    children: [
      {
        path: 'admin',  
        name: '首页',
        component: () => import("~pages/admin/layout.vue"),
      }
    ]
  }
] as RouteRecordRaw[]
