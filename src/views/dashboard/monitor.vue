<script lang="ts" setup>
const now = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')
const pkgTime = __PKG_TIME__
</script>

<template>
  <div>
    <div m-2>当前时间：{{ now }}</div>
    <div m-2>打包时间：{{ pkgTime }}</div>
  </div>
</template>
