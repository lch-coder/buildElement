<script setup lang="ts" name="multiTable">
import { exportToExcel } from '@/utils/excel'
const state = reactive({
  loading: false,
  tableData: [
    {
      date: '2016-05-03',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333,
    },
    {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333,
    },
    {
      date: '2016-05-04',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333,
    },
    {
      date: '2016-05-01',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333,
    },
    {
      date: '2016-05-08',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333,
    },
    {
      date: '2016-05-06',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333,
    },
    {
      date: '2016-05-07',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333,
    },
  ],
  tableColumns: [
    {
      prop: 'date',
      label: '日期',
    },
    {
      prop: 'Delivery Info',
      label: '配送信息',
      children: [
        {
          prop: 'name',
          label: '姓名',
        },
        {
          prop: 'Address Info',
          label: '地址信息',
          children: [
            { prop: 'province', label: '省份' },
            { prop: 'city', label: '城市' },
            { prop: 'address', label: '地址' },
            { prop: 'zip', label: '邮编' },
          ],
        },
      ],
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
const exportMultiTable = () => {
  exportToExcel(state.tableData, state.tableColumns, { filename: '多级表格' })
}
</script>

<template>
  <div m-2>
    <el-button mb-2 float-right type="primary" @click="exportMultiTable">导出</el-button>
    <ZTable :loading="state.loading" :table-data="state.tableData" :table-columns="state.tableColumns">
      <template #edit="{ scope }">
        <el-button link type="primary" size="small" @click="handleClick(scope.row)">详情</el-button>
        <el-button link type="primary" size="small">编辑</el-button>
      </template>
    </ZTable>
  </div>
</template>
