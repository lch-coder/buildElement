<script setup lang="ts">
import { useMenuStore, useAppStore } from '@/store'
import { IMenu } from '@/typings'
import menuTree from './menuTree.vue'

const appStore = useAppStore()
const { siderCollapse, siderWidth } = storeToRefs(appStore)
const menuStore = useMenuStore()

/**
 * 过滤掉需要隐藏的菜单
 * @param menuList
 */
const filterMenu = (menuList: IMenu[]) => {
  if (!menuList || !menuList.length) {
    return
  }
  return menuList
    .filter((item: IMenu) => {
      return !item.hidden
    })
    .map((item: IMenu) => {
      if (item.children) {
        item.children = filterMenu(item.children)
      }
      return item
    })
}
const realMenuList = computed(() => {
  return filterMenu(menuStore.menuList)
})
</script>

<template>
  <div v-if="!appStore.isDrawer" class="layout-aside" bg-bgColor transition-all duration-300 ease-in-out>
    <el-scrollbar height="100%">
      <el-menu :default-active="$route.path" :collapse="siderCollapse" h-full>
        <menuTree :menus="realMenuList" />
      </el-menu>
    </el-scrollbar>
    <div class="collapse">
      <el-icon :size="22" @click="appStore.setSiderCollapse(!siderCollapse)">
        <div v-if="siderCollapse" i-ep-expand />
        <div v-else i-ep-fold />
      </el-icon>
    </div>
  </div>

  <el-drawer
    v-else
    :model-value="!appStore.siderCollapse"
    direction="ltr"
    custom-class="layout-aside"
    :with-header="false"
    :size="214"
    @update:model-value="appStore.siderCollapse = !$event"
  >
    <el-menu :default-active="$route.path" :collapse="siderCollapse" h-full>
      <menuTree :menus="realMenuList" />
    </el-menu>
  </el-drawer>
</template>

<style lang="scss" scoped>
.layout-aside {
  display: flex;
  flex-direction: column;
  min-width: v-bind(siderWidth);
  transition: var(--el-transition-all);
  position: fixed;
  left: 0;
  top: 48px;
  z-index: 1000;
  box-sizing: border-box;
  width: v-bind(siderWidth);
  height: calc(100% - 48px);
  box-shadow: var(--el-box-shadow-lighter);
  :deep(.el-scrollbar__view) {
    height: 100%;
  }
  .el-menu {
    border-right: none;
  }

  .collapse {
    padding: 0 20px;
    height: 48px;
    line-height: 48px;
    display: flex;
    align-items: center;
    border-top: 1px solid var(--el-menu-border-color);
    .el-icon {
      cursor: pointer;
    }
  }
}
</style>

<style lang="scss">
.layout-aside {
  .el-drawer__body {
    padding: 0;
  }
}
</style>
