import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { useAppStore } from '@/store'
export function fitScreen() {
  const breakpoints = useBreakpoints(breakpointsTailwind)
  const route = useRoute()
  const appStore = useAppStore()

  watch(
    () => route.fullPath,
    () => {
      if (appStore.isDrawer) {
        appStore.siderCollapse = true
      }
    }
  )
  watch(
    breakpoints.lg,
    lg => {
      appStore.siderCollapse = !lg
    },
    { immediate: true }
  )
  watch(
    breakpoints.sm,
    sm => {
      appStore.isDrawer = !sm
    },
    { immediate: true }
  )
}
