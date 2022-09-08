import { nextTick } from 'vue'
import { defineStore } from 'pinia'
import { useMenuStore } from '@/store'

interface AppState {
  /** 重载页面(控制页面的显示) */
  reloadFlag: boolean
  /** 项目配置的抽屉可见状态 */
  settingDrawerVisible: boolean
  /** 侧边栏折叠状态 */
  siderCollapse: boolean
  /** vertical-mix模式下 侧边栏的固定状态 */
  mixSiderFixed: boolean
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    reloadFlag: true,
    settingDrawerVisible: false,
    siderCollapse: false,
    mixSiderFixed: false,
  }),
  getters: {
    /** 侧边栏宽度 */
    siderWidth(state) {
      const { siderCollapse } = state
      if (siderCollapse) {
        return '64px'
      } else {
        return '220px'
      }
    },
  },
  actions: {
    /**
     * 重载页面
     */
    async reloadPage() {
      const menuStore = useMenuStore()
      let name: string = this.$router.currentRoute.value.name as string
      menuStore.resetCache(name)
      this.reloadFlag = false
      await nextTick()
      this.reloadFlag = true

      setTimeout(() => {
        document.documentElement.scrollTo({ left: 0, top: 0 })
      }, 100)
    },
    /** 打开设置抽屉 */
    openSettingDrawer() {
      this.settingDrawerVisible = true
    },
    /** 关闭设置抽屉 */
    closeSettingDrawer() {
      this.settingDrawerVisible = false
    },
    /** 切换抽屉可见状态 */
    toggleSettingDrawerVisible() {
      this.settingDrawerVisible = !this.settingDrawerVisible
    },
    /** 设置侧边栏折叠状态 */
    setSiderCollapse(collapse: boolean) {
      this.siderCollapse = collapse
    },
    /** 折叠/展开 侧边栏折叠状态 */
    toggleSiderCollapse() {
      this.siderCollapse = !this.siderCollapse
    },
    /** 设置 vertical-mix模式下 侧边栏的固定状态 */
    setMixSiderIsFixed(isFixed: boolean) {
      this.mixSiderFixed = isFixed
    },
    /** 设置 vertical-mix模式下 侧边栏的固定状态 */
    toggleMixSiderFixed() {
      this.mixSiderFixed = !this.mixSiderFixed
    },
  },
})
