<script setup lang="ts" name="basicTable">
import { exportToExcel } from '@/utils/excel'
import { cloneDeep } from 'lodash-es'

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
  tableColumns: [] as any[],
  columnList: [
    {
      prop: 'baseData',
      label: '基础信息',
      children: [
        {
          prop: 'date',
          label: '日期',
          defaultCheck: true,
        },
        {
          prop: 'name',
          label: '姓名',
        },
        {
          prop: 'address',
          label: '地址',
        },
      ],
    },
  ],
})

const dialogVisible = ref(false)
const dialogRef: any = ref(null)

const handleClick = (row: any) => {
  console.log('click', row)
}

const handleConfirm = (val: any[]) => {
  const tableColumns = val.map(item => item.children).flat()
  tableColumns.push({
    prop: 'edit',
    label: '详情',
    fixed: 'right',
    slot: 'edit',
  })

  state.tableColumns = cloneDeep(tableColumns)
}

const exportTable = () => {
  exportToExcel(state.tableData, state.tableColumns, { filename: '基础表格' })
}

onMounted(() => {
  dialogRef.value.handleConfirm()
})
</script>

<template>
  <div m-2>
    <div mb-2 flex justify-end>
      <el-button @click="dialogVisible = true">自定义列</el-button>
      <el-button type="primary" @click="exportTable">导出</el-button>
    </div>
    <ZTable :loading="state.loading" :table-data="state.tableData" :table-columns="state.tableColumns">
      <template #edit="{ scope }">
        <el-button link type="primary" size="small" @click="handleClick(scope.row)">详情</el-button>
        <el-button link type="primary" size="small">编辑</el-button>
      </template>
    </ZTable>
    <DialogCustomColumn
      ref="dialogRef"
      v-model:dialog-visible="dialogVisible"
      :column-list="state.columnList"
      @handle-confirm="handleConfirm"
    ></DialogCustomColumn>
  </div>
</template>
