import { App } from "vue";
import copy from "./modules/copy";
import debounce from "./modules/debounce";
import draggable from "./modules/draggable";
import longpress from "./modules/longpress";
import throttle from "./modules/throttle";

const directivesList: any = {
  copy,
  draggable,
  debounce,
  throttle,
  longpress,
};

const directives = {
  install: (app: App<Element>) => {
    Object.keys(directivesList).forEach((key) => {
      // 注册所有自定义指令
      app.directive(key, directivesList[key]);
    });
  },
};

export default directives;
