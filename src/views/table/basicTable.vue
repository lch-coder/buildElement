<script setup lang="ts" name="basicTable">
const state = reactive({
  loading: false,
  tableData: [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ],
  tableColumns: [
    {
      prop: 'date',
      label: '日期',
    },
    {
      prop: 'name',
      label: '姓名',
    },
    {
      prop: 'address',
      label: '地址',
    },
    {
      prop: 'edit',
      label: '编辑',
      slot: 'edit',
    },
  ],
})

const handleClick = (row: any) => {
  console.log('click', row)
}
</script>

<template>
  <div m-2>
    <ZTable :loading="state.loading" :table-data="state.tableData" :table-columns="state.tableColumns">
      <template #edit="{ scope }">
        <el-button link type="primary" size="small" @click="handleClick(scope.row)">Detail</el-button>
        <el-button link type="primary" size="small">Edit</el-button>
      </template>
    </ZTable>
  </div>
</template>
