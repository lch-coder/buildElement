<script setup lang="ts">
const cacheList: string[] = []
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition mode="out-in" appear>
      <div>
        <keep-alive :include="cacheList">
          <component :is="Component" :key="$route.fullPath" />
        </keep-alive>
      </div>
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
