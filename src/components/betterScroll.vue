<template>
  <div ref="bsWrap" class="h-full text-left">
    <div ref="bsContent" class="content" :class="{ 'h-full': !isScrollY }">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import BetterScroll from '@better-scroll/core'
import type { Options } from '@better-scroll/core'

interface Props {
  /** better-scroll的配置: https://better-scroll.github.io/docs/zh-CN/guide/base-scroll-options.html */
  options: Options
}

const props = defineProps<Props>()

const instance = ref<BetterScroll>()
const bsWrap = ref<HTMLElement>()
const bsContent = ref<HTMLElement>()
const isScrollY = computed(() => Boolean(props.options.scrollY))

function initBetterScroll() {
  if (!bsWrap.value) return
  instance.value = new BetterScroll(bsWrap.value!, props.options)
}

// 滚动元素发生变化，刷新BS
const { width: wrapWidth } = useElementSize(bsWrap)
const { width, height } = useElementSize(bsContent)
watch([() => wrapWidth.value, () => width.value, () => height.value], () => {
  if (instance.value) {
    instance.value.refresh()
  }
})

onMounted(() => {
  initBetterScroll()
})

defineExpose({ instance })
</script>

<style lang="scss" scoped>
.content {
  width: max-content;
}
</style>
