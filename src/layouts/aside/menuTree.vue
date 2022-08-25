<template>
  <template v-for="menu in menus">
    <template v-if="menu.children && menu.children.length > 0">
      <el-sub-menu :index="menu.path" :key="menu.path">
        <template #title>
          <el-icon><i :class="menu.icon"></i></el-icon>
          <span>{{ menu.title }}</span>
        </template>
        <menu-tree :menus="menu.children"></menu-tree>
      </el-sub-menu>
    </template>
    <template v-else>
      <el-menu-item :index="menu.path" :key="menu.path" @click="clickMenu(menu)">
        <el-icon><i :class="menu.icon"></i></el-icon>
        <span>{{ menu.title }}</span>
      </el-menu-item>
    </template>
  </template>
</template>
<script setup lang="ts">
export interface Menu {
  title: string
  path: string
  icon?: string
  children?: Menu[]
  parent?: Menu | null
}
interface Props {
  menus: Menu[]
}
const props = withDefaults(defineProps<Props>(), {
  menus: () => [],
})

const router = useRouter()
const route = useRoute()

const clickMenu = (menu: any) => {
  const { path } = menu
  if (path.indexOf('http') === 0) {
    window.open(path)
  } else if (path !== route.fullPath) {
    router.push(path)
  }
}
</script>

<style lang="scss" scoped>
.el-sub-menu {
  .el-menu {
    background-color: #000c17;
  }
}

.el-menu-item.is-active {
  background-color: #409eff;
}
</style>
