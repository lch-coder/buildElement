<template>
  <div class="button-tab" :style="buttonStyle">
    <span class="button-preffix" text-sm>
      <slot></slot>
    </span>
    <div v-if="closable" class="button-icon">
      <closeIcon :active-color="primaryColor" @click.stop="handleClose" />
    </div>
  </div>
</template>

<script setup lang="ts">
import closeIcon from './closeIcon.vue'

interface Props {
  /** 暗黑模式 */
  darkMode?: boolean
  /** 激活状态 */
  isActive?: boolean
  /** 主题颜色 */
  primaryColor?: string
  /** 边框颜色 */
  borderColor?: string
  /** 暗黑模式的边框颜色 */
  darkBorderColor?: string
  /** 是否显示关闭图标 */
  closable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  darkMode: false,
  isActive: false,
  primaryColor: '#1890ff',
  borderColor: '#e5e7eb',
  darkBorderColor: '#ffffff3d',
  closable: true,
})

const buttonStyle = computed(() => {
  const style: any = {}
  style.borderColor = props.darkMode ? props.darkBorderColor : props.borderColor
  if (props.isActive) {
    style.backgroundColor = 'rgba(24, 144, 255, 0.1);'
    style.color = props.primaryColor
  }

  return style
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
.button-tab {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding-left: 14px;
  padding-right: 6px;
  border-width: 1px;
  border-style: solid;
  border-color: #e5e7eb;
  border-radius: 2px;
  cursor: pointer;
  .button-preffix {
    white-space: nowrap;
  }
  .button-icon {
    padding-left: 10px;
  }
}
</style>
