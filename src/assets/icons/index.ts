import { App } from "vue";
import SvgIcon from "./index.vue";
import "./iconfont-user.js";
import "./iconfont-home.js";
import "./iconfont-common.js";

export function setupSvgIcon(app: App) {
  app.component("SvgIcon", SvgIcon);
}
