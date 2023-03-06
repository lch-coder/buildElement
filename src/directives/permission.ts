/*按钮权限校验*/
import { App, DirectiveBinding } from 'vue'

//权限检查方法
const hasPermission = function (value: string) {
  const permissionList: string[] = ['edit', 'delete']
  return permissionList.includes(value)
}

const permissionDirective = function (el: HTMLElement, binding: DirectiveBinding) {
  if (!binding.value) {
    throw new Error('v-permission need value')
  }
  if (binding.value !== binding.oldValue && !hasPermission(binding.value)) {
    el?.parentNode?.removeChild(el) /*删除节点*/
  }
}

/**
 * 权限指令
 */
export default function setupPermissionDirective(app: App) {
  app.directive('permission', {
    mounted: permissionDirective,
    updated: permissionDirective,
  })
}
