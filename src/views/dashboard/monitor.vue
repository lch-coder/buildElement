<script lang="ts" setup>
const now = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')
</script>

<template>
  <div m-2>当前时间：{{ now }}</div>
</template>
