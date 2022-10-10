<template>
  <div class="z-table">
    <el-table ref="table" loading="loading" :data="tableData" size="small" highlight-current-row v-bind="$attrs">
      <TableColumn v-for="item in tableColumns" :key="item.prop" :col="item">
        <template v-for="slot in Object.keys(customSlots)" #[slot]="scope">
          <slot :name="slot" v-bind="scope" />
        </template>
      </TableColumn>
      <template #empty>
        <el-empty description="暂无数据"></el-empty>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts" setup name="ZTable">
import TableColumn from './tableColumn.vue'
import { IColumn } from './type'

interface Props {
  // 加载状态
  loading: boolean
  // 表格数据
  tableData: Array<any>
  // 表头数据
  tableColumns: IColumn[]
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
})

const table = ref<HTMLElement>()

const customSlots = useSlots()
</script>
