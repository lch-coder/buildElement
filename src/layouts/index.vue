<script lang="ts" setup>
import layoutHeader from './header/layoutHeader.vue'
import layoutAside from './aside/layoutAside.vue'
import layoutMain from './main/layoutMain.vue'
// import process from './process/index'
import tabList from '@/layouts/tab/index.vue'
</script>

<template>
  <el-container h-screen direction="vertical">
    <layoutHeader></layoutHeader>
    <el-container>
      <layoutAside></layoutAside>
      <el-container direction="vertical" class="main-container">
        <tabList></tabList>
        <el-main>
          <layoutMain></layoutMain>
          <el-backtop :right="100" :bottom="100" />
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
  padding-left: 220px;
  overflow: visible;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
}
</style>
