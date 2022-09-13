<template>
  <el-space direction="vertical" m-2 :size="16">
    <el-card class="shadow-sm rounded-16px">
      <template #header>
        <div>Tab Detail</div>
      </template>
      <el-space direction="vertical" :size="12" alignment="left">
        <div>当前路由的描述数据(meta)：</div>
        <div>{{ route.meta }}</div>
        <div>当前路由的查询数据(query)：</div>
        <div>{{ route.query }}</div>
        <el-button @click="handleToTab">返回Tab</el-button>
      </el-space>
    </el-card>
  </el-space>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
function handleToTab() {
  router.push({
    path: '/function/tab',
  })
}
</script>

<style scoped></style>
