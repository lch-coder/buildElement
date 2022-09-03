<template>
  <div class="app-process">
    <div class="app-process__left hidden-xs-only">
      <i class="i-ep-arrow-left"></i>
    </div>

    <div ref="app_process__scroller" class="app-process__scroller">
      <buttonTab
        class="button_tab"
        v-for="(item, index) in tabList"
        :key="item.name"
        :isActive="activeTabIndex === index"
        :closable="index > 0"
        @close="handleCloseTab(item)"
        @click="handleClickTab(item)"
      >
        <span>{{ item.title }}</span>
      </buttonTab>
    </div>
    <div class="app-process__right hidden-xs-only">
      <i class="i-ep-arrow-right"></i>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTabStore } from '@/store'
import buttonTab from './components/buttonTab.vue'
const tabStore = useTabStore()
const { tabList, activeTabIndex } = storeToRefs(tabStore)

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
.button_tab {
  margin-right: 10px;
}
.app-process {
  display: flex;
  align-items: center;
  height: 50px;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 15%);
  border-bottom: 1px solid rgba(178, 186, 194, 0.15);
  margin-bottom: 1px;

  &__left,
  &__right {
    background-color: #fff;
    height: 30px;
    line-height: 30px;
    padding: 0 2px;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background-color: #eee;
    }
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

  .block {
    display: inline-flex;
    align-items: center;
    border-radius: 3px;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    background-color: #fff;
    font-size: 12px;
    margin-right: 10px;
    color: #909399;
    cursor: pointer;
    border: 1px solid #e4ede7;

    &:last-child {
      margin-right: 0;
    }

    i {
      font-size: 14px;
      overflow: hidden;
      transition: all 0.3s;

      &:hover {
        color: #fff;
        background-color: #2f3447;
      }
    }

    &:hover {
      .el-icon-close {
        width: auto;
        margin-left: 5px;
      }
    }

    &.active {
      span {
        // color: $color-primary;
        color: #409eff;
      }

      i {
        margin-left: 5px;
      }

      &:before {
        // background-color: $color-primary;
        background-color: #2f3447;
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: relative;
        margin-right: 2px;
      }
    }
  }

  .context-menu {
    margin: 0;
    background: #fff;
    z-index: 100;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
    border: 1px solid #e4ede7;

    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;

      &:hover {
        color: #409eff;
        background: #eee;
      }
    }
  }
}
</style>
