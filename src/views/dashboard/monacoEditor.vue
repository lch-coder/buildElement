<script lang="ts" setup>
import monacoEditor from '@/components/monacoEditor/monacoEditor'
const value = ref('let a = 234')
</script>

<template>
  <div class="container">
    <monacoEditor v-model="value"></monacoEditor>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 500px;
}
</style>
