<template>
  <div class="app-tab">
    <better-scroll
      ref="tabScroller"
      class="app-tab__scroller"
      :options="{ scrollX: true, scrollY: false, click: false }"
    >
      <buttonTab
        v-for="(item, index) in tabList"
        :key="item.name"
        :isActive="activeTabIndex === index"
        :closable="index > 0"
        @close="handleCloseTab(item)"
        @click="handleClickTab(item)"
        @contextmenu.prevent="handleContextMenu($event, item)"
      >
        <span>{{ item.title }}</span>
      </buttonTab>
    </better-scroll>
    <div class="app-tab__right" @click="handleRefresh">
      <i class="text-22px align-middle i-ep-refresh-right" :class="{ 'animate-spin': loading }" />
    </div>
    <contextMenu
      v-model:visible="menu.visible"
      :currentTab="(menu.currentTab as Tab)"
      :left="menu.style.left"
      :top="menu.style.top"
    ></contextMenu>
  </div>
</template>

<script lang="ts" setup>
import { useTabStore, useAppStore } from '@/store'
import buttonTab from './components/buttonTab.vue'
import contextMenu from './components/contextMenu.vue'

const appStore = useAppStore()
const loading = ref<boolean>(false)
const handleRefresh = () => {
  loading.value = true
  appStore.reloadPage()
  setTimeout(() => {
    loading.value = false
  }, 1000)
}

const tabStore = useTabStore()
const { tabList, activeTabIndex } = storeToRefs(tabStore)
interface StyleProps {
  left: string
  top: string
}
interface MenuProps {
  visible: boolean
  currentTab?: Tab
  style: StyleProps
}
const menu = reactive<MenuProps>({
  visible: false,
  // currentTab: {},
  style: {
    left: '0px',
    top: '0px',
  },
})

const handleContextMenu = (e: MouseEvent, item: Tab) => {
  menu.visible = true
  menu.currentTab = item
  menu.style.left = e.pageX + 'px'
  menu.style.top = e.pageY + 'px'
}

const route = useRoute()
watch(
  () => route.fullPath,
  () => {
    const currentTab: Tab = {
      title: route.meta.title as string,
      fullPath: route.fullPath,
      icon: route.meta.icon as string,
      name: route.name as string,
    }
    tabStore.addTab(currentTab)
    tabStore.setActiveTab(route.fullPath)
  },
  { immediate: true }
)

const handleCloseTab = (item: Tab) => {
  tabStore.removeTab(item)
}

const handleClickTab = (item: Tab) => {
  tabStore.clickTab(item)
}
</script>

<style lang="scss" scoped>
.app-tab {
  display: flex;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 15%);
  border-bottom: 1px solid rgba(178, 186, 194, 0.15);
  margin-bottom: 1px;

  &__left,
  &__right {
    height: 30px;
    line-height: 30px;
    padding: 0 2px;
    border-radius: 3px;
    cursor: pointer;
  }

  &__left {
    margin-right: 10px;
  }

  &__right {
    margin-left: 10px;
  }

  &__scroller {
    width: 100%;
    flex: 1;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
