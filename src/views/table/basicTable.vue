<script setup lang="ts" name="basicTable">
import { exportToExcel } from '@/utils/excel'
const state = reactive({
  loading: false,
  tableData: [
    {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    },
    {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄',
    },
    {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄',
    },
    {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄',
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

const exportTable = () => {
  exportToExcel(state.tableData, state.tableColumns, { filename: '基础表格' })
}
</script>

<template>
  <div m-2>
    <el-button mb-2 float-right type="primary" @click="exportTable">导出</el-button>
    <ZTable :loading="state.loading" :table-data="state.tableData" :table-columns="state.tableColumns">
      <template #edit="{ scope }">
        <el-button link type="primary" size="small" @click="handleClick(scope.row)">详情</el-button>
        <el-button link type="primary" size="small">编辑</el-button>
      </template>
    </ZTable>
  </div>
</template>
