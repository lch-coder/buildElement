import type { RouteLocationNormalizedLoaded } from 'vue-router'
import { defineStore } from 'pinia'

interface TabState {
  /** 多页签数据 */
  tabList: Tab[]
  /** 当前激活状态的页签(路由fullPath) */
  activeTab: string
}

const ignoreList = ['redirect', 'notFound', 'login', '403', '404', '500']

export const useTabStore = defineStore('tab', {
  state: (): TabState => ({
    tabList: [],
    activeTab: '',
  }),
  getters: {
    /** 当前激活状态的页签索引 */
    activeTabIndex(state) {
      const { tabList, activeTab } = state
      return tabList.findIndex(tab => tab.fullPath === activeTab)
    },
  },
  actions: {
    /**
     * 设置当前路由对应的页签为激活状态
     * @param fullPath - 路由fullPath
     */
    setActiveTab(fullPath: string) {
      this.activeTab = fullPath
    },
    /**
     * 添加多页签
     * @param currentTab - 标签
     */
    addTab(currentTab: Tab) {
      let index = this.tabList.findIndex(item => item.name === currentTab.name)
      if (index === -1 && !ignoreList.includes(currentTab.name)) {
        this.tabList.push(currentTab)
      } else {
        // this.tabList.splice(index, 1, currentTab)
      }
    },
    /**
     * 删除多页签
     * @param currentTab - 标签
     */
    removeTab(currentTab: Tab) {
      const activeIndex = this.tabList.findIndex(tab => tab.fullPath === currentTab.fullPath)
      // 点击当前页面关闭按钮
      if (this.activeTabIndex === activeIndex) {
        this.tabList.splice(activeIndex, 1)
        let activePath = this.tabList[this.tabList.length - 1].fullPath
        this.setActiveTab(activePath)
        this.$router.push({ path: activePath })
      } else {
        this.tabList.splice(activeIndex, 1)
      }
    },
    /**
     * 点击单个tab
     * @param currentTab - 标签
     */
    clickTab(currentTab: Tab) {
      const activeIndex = this.tabList.findIndex(tab => tab.fullPath === currentTab.fullPath)
      if (this.activeTabIndex !== activeIndex) {
        this.setActiveTab(currentTab.fullPath)
        this.$router.push({ path: currentTab.fullPath })
      }
    },

    /** 初始化Tab状态 */
    iniTabStore(currentRoute: RouteLocationNormalizedLoaded) {},
    /**
     * 设置当前路由对应的页签title
     * @param title - tab名称
     */
    setActiveTabTitle(title: string) {
      const item = this.tabList.find(tab => tab.fullPath === this.activeTab)
      if (item) {
        item.title = title
      }
    },
  },
})
