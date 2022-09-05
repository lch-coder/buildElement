<script lang="ts" setup>
import layoutHeader from './header/layoutHeader.vue'
import layoutAside from './aside/layoutAside.vue'
import layoutMain from './main/layoutMain.vue'
import tabList from '@/layouts/tab/index.vue'
import { useAppStore } from '@/store'
const appStore = useAppStore()
const { siderWidth } = storeToRefs(appStore)
</script>

<template>
  <el-container h-screen direction="vertical">
    <layoutHeader></layoutHeader>
    <el-container>
      <layoutAside></layoutAside>
      <tabList></tabList>
      <el-container direction="vertical" class="main-container">
        <el-main>
          <layoutMain></layoutMain>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.el-main {
  padding: 0;
}
.main-container {
  padding-top: 98px;
  padding-bottom: 0px;
  padding-left: v-bind(siderWidth);
  overflow: visible;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
}
</style>
