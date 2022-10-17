<template>
  <template v-if="!col.children">
    <el-table-column
      :prop="col.prop"
      :label="col.label"
      :width="col.width"
      :min-width="col.minWidth"
      :sortable="col.sortable"
      :fixed="col.fixed"
    >
      <template #header>
        <template v-if="!col.headerSlot">
          <span>{{ col.label }}</span>
        </template>
        <template v-else>
          <slot :scope="col" :name="col.headerSlot"></slot>
        </template>
      </template>
      <template #default="scope">
        <template v-if="!col.slot">
          <span>{{ scope.row[col.prop] }}</span>
        </template>
        <template v-else>
          <slot :scope="scope" :prop="col" :name="col.slot"></slot>
        </template>
      </template>
    </el-table-column>
  </template>

  <el-table-column v-else :label="col.label">
    <TableColumn v-for="t in col.children" :key="t.prop" :col="t">
      <template v-for="slot in Object.keys(customSlots)" #[slot]="scope">
        <slot :name="slot" v-bind="scope" />
      </template>
    </TableColumn>
  </el-table-column>
</template>

<script lang="ts" setup name="TableColumn">
interface Props {
  col: any
}

const props = withDefaults(defineProps<Props>(), {
  col: {},
})

const customSlots = useSlots()
</script>
