<template>
  <div m-2>
    <el-tag>更换主题色</el-tag>
    <el-color-picker v-model="defaultTheme" @change="changeTheme" />
  </div>
</template>
<script lang="ts" setup>
import { useElementPlusTheme } from '@/composables'

const defaultTheme = ref('#405DFF')

const { changeTheme } = useElementPlusTheme(defaultTheme.value)
</script>
