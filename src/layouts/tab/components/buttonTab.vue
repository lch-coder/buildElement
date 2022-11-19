<template>
  <el-button class="tab-btn" :class="{ 'is-active': isActive }" :icon="icon">
    <span text-sm>
      <slot></slot>
    </span>
    <div v-if="closable" pl-1>
      <closeIcon @click.stop="handleClose"></closeIcon>
    </div>
  </el-button>
</template>

<script setup lang="ts">
import closeIcon from './closeIcon.vue'

interface Props {
  /** 激活状态 */
  isActive?: boolean
  /** 是否显示关闭图标 */
  closable?: boolean
  /** 图标 */
  icon?: string
}

const props = withDefaults(defineProps<Props>(), {
  isActive: false,
  closable: true,
  icon: '',
})

interface Emits {
  /** 点击关闭图标 */
  (e: 'close'): void
}

const emit = defineEmits<Emits>()

function handleClose() {
  emit('close')
}
</script>
<style lang="scss" scoped>
.is-active {
  color: var(--el-button-active-text-color);
  border-color: var(--el-button-active-border-color);
  background-color: var(--el-button-active-bg-color);
  outline: 0;
}
.tab-btn {
  padding: 8px 12px;
}
.el-button:focus {
  color: var(--el-button-text-color);
  border-color: var(--el-button-border-color);
  background-color: var(--el-button-bg-color);
  outline: 0;
}
</style>
