import type { App } from 'vue'

/**
 * 聚焦
 */
export default function setupFocusDirective(app: App) {
  app.directive('focus', {
    mounted(el: HTMLElement) {
      // 聚焦元素
      el.focus()
    },
  })
}
