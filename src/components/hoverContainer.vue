<template>
  <el-tooltip :disabled="disabled" :content="content" :placement="placement">
    <div class="flex-center h-full cursor-pointer hover:bg-[#f6f6f6] dark:hover:bg-[#333]">
      <slot></slot>
    </div>
  </el-tooltip>
</template>

<script lang="ts" setup>
import type { Placement } from 'element-plus'

interface Props {
  /** tooltip显示文本 */
  content?: string
  /** tooltip的位置 */
  placement?: Placement
}

const props = withDefaults(defineProps<Props>(), {
  content: '',
  placement: 'bottom',
})

const disabled = computed(() => !props.content)
</script>

<style scoped></style>
