<template>
  <div m-4>
    <el-tabs v-model="activeName">
      <el-tab-pane label="折线图移动到点显示该点tooltip" name="first">
        <lineDemo></lineDemo>
      </el-tab-pane>
      <el-tab-pane label="饼图点击高亮" name="second">
        <pieDemo></pieDemo>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import lineDemo from './lineDemo.vue'
import pieDemo from './pieDemo.vue'
const activeName = ref('first')
</script>

<style scoped>
.el-tab-pane {
  height: 500px;
}
</style>
