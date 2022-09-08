<script lang="ts" setup>
const value = ref('let a = 234')
const language = ref('javascript')
const editorMounted = (editor: any) => {
  console.log('editor实例加载完成', editor)
}

const router = useRouter()
const refreshPage = () => {
  router.replace({
    path: '/redirect' + router.currentRoute.value.path,
    query: router.currentRoute.value.query,
  })
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
    <el-button @click="refreshPage" icon="i-ep-refresh-right">刷新</el-button>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 10px;
}
</style>
