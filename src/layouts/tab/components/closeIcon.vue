<template>
  <span ref="hoverRef" class="tab__icon">
    <transition name="tab__icon-fade">
      <i v-if="isHovered" i-ion-ios-close-circleclass="tab__icon-close"></i>
      <i v-else i-ion-ios-close class="tab__icon-close"></i>
    </transition>
  </span>
</template>

<script lang="ts" setup>
const hoverRef = ref()
const isHovered = useElementHover(hoverRef)
</script>

<style lang="scss" scoped>
.tab__icon {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  &-fade {
    &-enter-active,
    &-leave-active {
      transition: opacity 0.3s ease-in-out;
    }
    &-enter-from,
    &-leave-to {
      opacity: 0;
    }
  }
  &-close {
    position: absolute;
    width: 18px;
    height: 18px;
  }
}
</style>
