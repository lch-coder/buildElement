<script setup lang="ts">
import { useMenuStore } from '@/store/modules/menu'
import menuTree from './menuTree.vue'
const menu: any = reactive({
  isCollapse: false,
})
const width = computed(() => (menu.isCollapse ? '64px' : '220px'))
const menuStore = useMenuStore()
</script>

<template>
  <div class="layout-aside">
    <el-scrollbar>
      <el-menu :default-active="$route.path" :collapse="menu.isCollapse">
        <menuTree :menus="menuStore.menuList" />
      </el-menu>
    </el-scrollbar>
    <div class="collapse border-t border-black/25">
      <el-icon :size="24" @click="menu.isCollapse = !menu.isCollapse">
        <div v-if="menu.isCollapse" i-ep-expand />
        <div v-else i-ep-fold />
      </el-icon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-aside {
  display: flex;
  flex-direction: column;
  width: v-bind(width);
  min-width: v-bind(width);
  transition: var(--el-transition-all);
  // background-color: #001529;

  // .el-menu {
  //   --el-menu-text-color: rgba(255, 255, 255, 0.65);
  //   --el-menu-hover-text-color: rgba(255, 255, 255, 0.65);
  //   --el-menu-bg-color: #001529;
  //   --el-menu-hover-bg-color: rgb(0, 17, 33);
  //   --el-menu-active-color: #fff;
  //   border-right: none;
  // }
  .collapse {
    padding: 0 20px;
    height: 48px;
    line-height: 48px;
    display: flex;
    align-items: center;
    .el-icon {
      cursor: pointer;
    }
  }
}
</style>
