<script setup lang="ts">
import { icons as epIcons } from '@iconify-json/ep'
const iconList = [...Object.keys(epIcons.icons).map(name => `i-${epIcons.prefix}-${name}`)]
const iconStr = '<div class="i-ep-add-location"></div>'
const { copy } = useClipboard()

async function onCopyCode(icon: string) {
  await copy(`<div class="${icon}"></div>`)
  ElMessage.success('复制成功')
}
async function onCopyName(icon: string) {
  await copy(icon)
  ElMessage.success('复制成功')
}
</script>

<template>
  <el-card m-3 shadow="never">
    <div class="text-xl my-3">Element Plus Icons</div>
    <el-alert :closable="false">
      <template #title>
        图标前缀：<strong>i-ep-</strong> 使用方法：<strong>{{ iconStr }}</strong>
      </template>
    </el-alert>
    <div class="flex flex-wrap">
      <div
        v-for="icon in iconList"
        :key="icon"
        class="cursor-pointer flex flex-col items-center justify-center w-120px h-120px hover:scale-110"
      >
        <div :class="`text-2xl ${icon}`" />
        <div class="my-2 text-xs">
          {{ icon.replace('i-ep-', '') }}
        </div>
        <el-button-group size="small">
          <el-button @click="onCopyCode(icon)"> 代码 </el-button>
          <el-button @click="onCopyName(icon)"> 名称 </el-button>
        </el-button-group>
      </div>
    </div>
  </el-card>
</template>

<style>
.icon {
  cursor: pointer;
}
</style>
