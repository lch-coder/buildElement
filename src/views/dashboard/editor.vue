<script lang="ts" setup>
import { editor } from 'monaco-editor'

const value = ref('let a = 234')
const language = ref('javascript')
const editorMounted = (editor: any) => {
  console.log('editor实例加载完成', editor)
}
</script>

<template>
  <div class="container">
    <monacoEditor
      v-model="value"
      :language="language"
      width="800px"
      height="500px"
      @editor-mounted="editorMounted"
    ></monacoEditor>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 10px;
}
</style>
