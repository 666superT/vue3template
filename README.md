## 文件资源目录
Lion-View
├─ .vscode                # vscode推荐配置
├─ nginx                  # nginx配置文件
├─ public                 # 静态资源文件（忽略打包）
├─ src
│  ├─ api                 # API 接口管理
│  ├─ assets              # 静态资源文件
│  ├─ components          # 全局组件
│  ├─ config              # 全局配置项
│  ├─ directives          # 全局指令文件
│  ├─ language            # 语言国际化
│  ├─ layout              # 框架布局
│  ├─ router              # 路由管理
│  ├─ store               # pinia store
│  ├─ styles              # 全局样式
│  ├─ typings             # 全局 ts 声明
│  ├─ utils               # 工具库
│  ├─ views               # 项目所有页面
│  ├─ App.vue             # 入口页面
│  ├─ env.d.ts            # ts 识别 vue 文件
│  └─ main.ts             # 入口文件
├─ .env.development       # 开发环境配置
├─ .env.production        # 生产环境配置
├─ .env.test              # 测试环境配置
├─ .eslintignore          # 忽略 Eslint 校验
├─ .eslintrc.cjs          # Eslint 校验配置
├─ .gitignore             # git 提交忽略
├─ .prettierignore        # 忽略 prettier 格式化
├─ prettierrc.config.js   # prettier 配置
├─ .stylelintignore       # 忽略 stylelint 格式化
├─ .stylelintrc.cjs       # stylelint 样式格式化配置
├─ index.html             # 入口 html
├─ package-lock.json      # 依赖包包版本锁
├─ package.json           # 依赖包管理
├─ CHANGELOG.md           # 项目更新日志
├─ README.md              # README 介绍
├─ Dockerfile             # docker打包配置文件
├─ tsconfig.json          # typescript 全局配置
├─ tsconfig.node.json     # typescript node配置
└─ vite.config.ts         # vite 配置

## 相关插件安装

### 开发中需要的插件
```
"@types/node": "^18.8.3",
"@typescript-eslint/eslint-plugin": "^5.39.0",
"@typescript-eslint/parser": "^5.39.0",
"@vitejs/plugin-vue": "^3.1.0",

"eslint": "^8.25.0",
"eslint-config-prettier": "^8.5.0",
"eslint-plugin-prettier": "^4.2.1",
"eslint-plugin-vue": "^9.6.0",

"postcss": "^8.4.17",
"postcss-html": "^1.5.0",
"prettier": "^2.7.1",

"sass": "^1.55.0",
"stylelint": "^14.13.0",
"stylelint-config-html": "^1.1.0",
"stylelint-config-prettier": "^9.0.3",
"stylelint-config-recess-order": "^3.0.0",
"stylelint-config-recommended-scss": "^7.0.0",
"stylelint-config-recommended-vue": "^1.4.0",
"stylelint-config-standard": "^28.0.0",
"stylelint-config-standard-scss": "^5.0.0",

"unplugin-auto-import": "^0.11.2",
"unplugin-vue-components": "^0.22.8",

```

### 项目需要的插件
```
"axios": "^1.1.2",
"element-plus": "^2.2.17",
"pinia": "^2.0.23",
"pinia-plugin-persist": "^1.0.0",
"vue-i18n": "^9.2.2",
"vue-router": "^4.1.5"
```

## 相关推荐插件介绍
```
# 全屏插件
npm install screenfull 

# 标注线插件
npm install vue3-sketch-ruler 

# 拖拽组件
npm install vuedraggable 

# 动态国际化
npm install vue-i18n 

# 图片懒加载
npm install vue3-lazyload 

# 全局热键，快捷键解决方案
npm install keymaster 

# 代码编辑器
npm install monaco-editor 

# 根据dom生成对应图片
npm install html2canvas 

# 语法高亮
npm install highlight.js 

# 颜色选择器
npm install color 

# 动画
npm install animate.css 

# 加密解密
npm install crypto-js 

```