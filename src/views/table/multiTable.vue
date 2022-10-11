<script setup lang="ts" name="multiTable">
import { exportToExcel } from '@/utils/excel'
const state = reactive({
  loading: false,
  tableData: [
    {
      date: '2016-05-03',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-08',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-06',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-07',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
  ],
  tableColumns: [
    {
      prop: 'date',
      label: '日期',
    },
    {
      prop: 'Delivery Info',
      label: 'Delivery Info',
      children: [
        {
          prop: 'name',
          label: '姓名',
        },
        {
          prop: 'Address Info',
          label: 'Address Info',
          children: [
            { prop: 'state', label: '状态' },
            { prop: 'city', label: '城市' },
            { prop: 'address', label: '地址' },
            { prop: 'zip', label: 'Zip' },
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
        <el-button link type="primary" size="small" @click="handleClick(scope.row)">Detail</el-button>
        <el-button link type="primary" size="small">Edit</el-button>
      </template>
    </ZTable>
  </div>
</template>
