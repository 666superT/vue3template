import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import directives from "./directives";
import i18n from "./language";
import "./styles/base.css";
import "uno.css";
import { setupSvgIcon } from "./assets/icons/index";
/**
 * 创建应用
 */
const app = createApp(App);

/**
 * 注册状态管理
 */
app.use(store);

/**
 * 注册路由
 */
app.use(router);

/**
 * 注册自定义指令
 */
app.use(directives);

/**
 * 注册国际化
 */
// app.use(i18n);

/**
 * 加载svg
 */
setupSvgIcon(app);

/**
 * 挂载到页面
 */
app.mount("#app");
