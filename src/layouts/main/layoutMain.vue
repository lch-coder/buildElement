<script setup lang="ts">
import { useAppStore, useMenuStore } from '@/store'
const appStore = useAppStore()
const menuStore = useMenuStore()
const { cacheList } = storeToRefs(menuStore)
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition name="el-fade-in" mode="out-in" appear>
      <keep-alive :include="cacheList">
        <component :is="Component" v-if="appStore.reloadFlag" :key="route.fullPath" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<style scoped>
.v-enter-active {
  transition-property: opacity, transform;
  transition-duration: 0.2s;
}

.v-enter-from {
  opacity: 0.5;
  transform: translateX(-20px);
}

.v-enter-to {
  opacity: 1;
  transform: translateX(0);
}
</style>
