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
  persist: true,
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
      this.$router.push({ path: fullPath })
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
      const currentIndex = this.tabList.findIndex(tab => tab.fullPath === currentTab.fullPath)
      // 点击当前页面关闭按钮
      if (this.activeTabIndex === currentIndex) {
        this.tabList.splice(currentIndex, 1)
        let activePath = this.tabList[this.tabList.length - 1].fullPath
        this.setActiveTab(activePath)
      } else {
        this.tabList.splice(currentIndex, 1)
      }
    },
    /**
     * 点击单个tab
     * @param currentTab - 标签
     */
    clickTab(currentTab: Tab) {
      const currentIndex = this.tabList.findIndex(tab => tab.fullPath === currentTab.fullPath)
      if (this.activeTabIndex !== currentIndex) {
        this.setActiveTab(currentTab.fullPath)
      }
    },
    /**
     * 关闭其他tab
     * @param currentTab - 标签
     */
    clearOtherTab(currentTab: Tab) {
      this.tabList = [currentTab]
      let activePath = currentTab.fullPath
      this.setActiveTab(activePath)
    },
    /**
     * 关闭左边tab
     * @param currentTab - 标签
     */
    clearLeftTab(currentTab: Tab) {
      const currentIndex = this.tabList.findIndex(tab => tab.fullPath === currentTab.fullPath)
      // 当前页关闭
      if (currentIndex > this.activeTabIndex) {
        this.setActiveTab(currentTab.fullPath)
      }
      this.tabList = this.tabList.filter((_, index) => index >= currentIndex)
    },
    /**
     * 关闭右边tab
     * @param currentTab - 标签
     */
    clearRightTab(currentTab: Tab) {
      const currentIndex = this.tabList.findIndex(tab => tab.fullPath === currentTab.fullPath)
      // 当前页关闭
      if (currentIndex < this.activeTabIndex) {
        this.setActiveTab(currentTab.fullPath)
      }
      this.tabList = this.tabList.filter((_, index) => index <= currentIndex)
    },
    /**
     * 关闭全部，保留第一个tab
     * @param currentTab - 标签
     */
    clearAllTab(currentTab?: Tab) {
      if (currentTab) {
        this.tabList = [currentTab]
        this.setActiveTab(currentTab.fullPath)
      } else {
        this.tabList = this.tabList.filter((_, index) => index === 0)
        this.setActiveTab(this.tabList?.[0]?.fullPath)
      }
    },
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
