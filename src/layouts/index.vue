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
      <el-container direction="vertical">
        <!-- <process></process> -->
        <tabList></tabList>
        <el-main>
          <el-scrollbar>
            <layoutMain></layoutMain>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.el-container {
  overflow: hidden;
}
.el-main {
  padding: 0;
}
</style>
