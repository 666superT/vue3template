import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
import Unocss from "unocss/vite";
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import presetRemToPx from "@unocss/preset-rem-to-px";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  resolve: {
    // 路径别名
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;`
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver({
        // 不添加会导致使用ElMessage，ElNotification等组件时默认的主题色会覆盖自定义的主题色
        importStyle: 'sass'
      })],
    }),
    Components({
      resolvers: [ElementPlusResolver({
        // 不添加会导致自定义主题样式不生效
        importStyle: 'sass'
      })],
    }), Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetRemToPx(),
        presetIcons({
          scale: 1.2,
          warn: true,
        }),
      ],
      rules: [
        [/^m-?(\d+)$/, ([, d]) => ({ margin: `${d}px` })],
        [/^mt-?(\d+)$/, ([, d]) => ({ "margin-top": `${d}px` })],
        [/^ml-?(\d+)$/, ([, d]) => ({ "margin-left": `${d}px` })],
        [/^mr-?(\d+)$/, ([, d]) => ({ "margin-right": `${d}px` })],
        [/^mb-?(\d+)$/, ([, d]) => ({ "margin-bottom": `${d}px` })],
        [/^p-?(\d+)$/, ([, d]) => ({ padding: `${d}px` })],
        [/^pt-?(\d+)$/, ([, d]) => ({ "padding-top": `${d}px` })],
        [/^pl-?(\d+)$/, ([, d]) => ({ "padding-left": `${d}px` })],
        [/^pr-?(\d+)$/, ([, d]) => ({ "padding-right": `${d}px` })],
        [/^pb-?(\d+)$/, ([, d]) => ({ "padding-bottom": `${d}px` })],
        [/^f-?(\d+)$/, ([, d]) => ({ "font-size": `${d}px` })],
        [
          /^tc-?(\d+)$/,
          ([, d]) => ({
            color: `
            ${d == "1"
                ? "#303133"
                : d == "2"
                  ? "#606266"
                  : d == "3"
                    ? "#909399"
                    : d == "4"
                      ? "#C0C4CC"
                      : d == "0"
                        ? "#35A575FF"
                        : ""
              } 
            `,
          }),
        ],
      ],
      transformers: [transformerDirectives(), transformerVariantGroup()],
    }),
  ],
})
