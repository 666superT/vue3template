import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

/**
 * 路由前置拦截器
 */
router.beforeEach((to, from, next) => {
  // 设置页面标题
  if (to.meta.title) {
    document.title = to.meta.title as string;
  }
  next();
});

/**
 * 路由后置拦截器
 */
router.afterEach(() => {});

export default router;
