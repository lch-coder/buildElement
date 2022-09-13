<template>
  <div>
    <el-space direction="vertical" m-2>
      <el-card class="shadow-sm rounded-16px" w-100>
        <template #header>
          <div>Tab Home</div>
        </template>
        <el-space direction="vertical" :size="12" alignment="left">
          <el-button @click="handleToTabDetail">跳转Tab Detail</el-button>
          <el-button @click="handleToTabMultiDetail(1)">跳转Tab Multi Detail 1</el-button>
          <el-button @click="handleToTabMultiDetail(2)">跳转Tab Multi Detail 2</el-button>
        </el-space>
      </el-card>
    </el-space>

    <el-space direction="vertical" m-2>
      <el-card class="shadow-sm rounded-16px" w-100>
        <template #header>
          <div>测试缓存</div>
        </template>
        <el-space direction="vertical" :size="12">
          <el-input v-model="value"></el-input>
          <el-button @click="refreshPage" icon="i-ep-refresh-right">全局刷新</el-button>
        </el-space>
      </el-card>
    </el-space>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()

const value = ref('默认内容')
const refreshPage = () => {
  router.replace({
    path: '/redirect' + router.currentRoute.value.path,
    query: router.currentRoute.value.query,
  })
}

function handleToTabDetail() {
  router.push({
    path: '/function/tab-detail',
    query: { name: 'abc' },
    hash: '#DEMO_HASH',
  })
}

function handleToTabMultiDetail(num: number) {
  router.push({
    path: '/function/tab-multi-detail',
    query: { name: 'abc', num },
    hash: '#DEMO_HASH',
  })
}
</script>

<script lang="ts">
export default {
  name: 'Tab',
}
</script>
