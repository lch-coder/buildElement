/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 打包时间
declare const __PKG_TIME__: string

declare module 'xlsx-style-vite'
declare module 'css-color-function'
declare module '@erkelost/utils'
