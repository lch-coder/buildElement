<template>
  <div>
    <el-dialog
      v-model="dialogVisible"
      title="自定义列"
      custom-class="custom-column__dialog"
      draggable
      :before-close="handleClose"
      :close-on-click-modal="false"
    >
      <div class="custom-column">
        <div class="custom-column-left">
          <div
            v-for="(item, index) in state.columnList"
            :key="item.prop + index"
            :class="[state.curretIndex == index ? 'active' : '', 'side']"
            @click="savaCurrentIndex(index)"
          >
            {{ item.label }}
          </div>
        </div>

        <div class="custom-column-right">
          <div
            v-for="(item, index) in state.columnList"
            :id="'rightTitle' + index"
            :key="item.prop + index"
            class="column-list"
          >
            <el-checkbox
              v-model="item.checkAll"
              class="check_title"
              @change="value => handleCheckAll(value as boolean, index)"
            >
              {{ item.label }}
            </el-checkbox>
            <div class="check_list">
              <el-checkbox-group v-model="item.checkedColumnList">
                <el-checkbox
                  v-for="(ele, i) in item.children"
                  :key="ele.label + i"
                  :label="ele.prop"
                  @change="handleCheckColumn(index)"
                >
                  <el-popover
                    placement="top-start"
                    trigger="hover"
                    :content="ele.tip"
                    :show-after="200"
                    :disabled="!ele.tip"
                  >
                    <template #reference>
                      <span>
                        {{ ele.label }}
                      </span>
                    </template>
                  </el-popover>
                </el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button auto-insert-space @click="handleClose">取消</el-button>
          <el-button type="primary" auto-insert-space @click="handleConfirm">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { cloneDeep, sortBy, findIndex } from 'lodash-es'

interface Column {
  prop: string
  label: string
  defaultCheck: boolean
  checkAll: boolean
  checkedColumnList: string[]
  tip?: string
  children: Column[]
}
interface Props {
  dialogVisible: boolean
  columnList: Column[]
}

const props = withDefaults(defineProps<Props>(), {
  dialogVisible: false,
})

const emit = defineEmits(['update:dialogVisible', 'handle-close', 'handle-confirm'])

const { dialogVisible } = useVModels(props, emit)

const init = () => {
  const arr: Column[] = []
  props.columnList.forEach(item => {
    const obj = item
    obj['checkedColumnList'] = []
    obj['checkAll'] = false
    arr.push(obj)
  })
  state.columnList = cloneDeep(arr)

  let defaultCheckList = arr.filter(item => {
    item.children = item.children.filter(ele => ele.defaultCheck)
    return item.children.length > 0
  })
  defaultCheckList.forEach(item => {
    let checkedColumnList = item.children.map(ele => ele.prop)
    state.columnList.forEach((ele, index: number) => {
      if (item.prop === ele.prop) {
        ele['checkedColumnList'].push(...checkedColumnList)
      }
      handleCheckColumn(index)
    })
  })
}

const state = reactive({
  curretIndex: 0,
  columnList: [] as Column[],
})

const handleClose = () => {
  dialogVisible.value = false
  emit('handle-close')
}

const handleConfirm = () => {
  dialogVisible.value = false

  let selectedList = cloneDeep(state.columnList).filter(item => {
    item.children = item.children.filter(ele => item.checkedColumnList.includes(ele.prop))
    // 排序，保持选中顺序
    const sortByList = item.children.map(ele => ele.prop)
    item.children = sortBy(item.children, x => findIndex(sortByList, y => x.prop === y))
    return item.children.length > 0
  })
  console.log(selectedList)

  emit('handle-confirm', selectedList)
}

defineExpose({
  handleConfirm,
})

function savaCurrentIndex(index: number) {
  state.curretIndex = index
  const dom: HTMLElement | null = document.querySelector('#rightTitle' + index)
  const domParent: HTMLElement | null = document.querySelector('.custom-column-right')
  domParent!.scrollTo({
    top: dom!.offsetTop - 77,
    behavior: 'smooth',
  })
}

function handleCheckAll(value: boolean, index: number) {
  state.columnList[index].checkedColumnList = value ? state.columnList[index].children.map(ele => ele.prop) : []
}
function handleCheckColumn(index: number) {
  state.columnList[index].checkAll =
    state.columnList[index].checkedColumnList.length === state.columnList[index].children.length
}

onMounted(() => {
  init()
})
</script>

<style lang="scss" scoped>
:deep(.custom-column__dialog) {
  border-radius: 20px;
  .el-dialog__header {
    padding: 32px 32px 26px;
    height: 76px;
    .el-dialog__title {
      height: 18px;
      font-size: 18px;
      font-weight: 500;
      line-height: 18px;
    }
  }
  .el-dialog__body {
    padding: 0 40px;
    border: none;
    .custom-column {
      display: flex;
      height: 516px;
      border: 1px solid var(--el-border-color);
      border-radius: 5px;
      &-left {
        width: 20%;
        border-right: 1px solid var(--el-border-color);
        overflow: auto;
        .side {
          padding-left: 16px;
          line-height: 40px;
          cursor: pointer;
        }
        .active {
          color: var(--el-color-primary);
          background-color: var(--el-bg-color-page);
        }
      }
      &-right {
        flex: 1;
        overflow: auto;
        .column-list {
          padding: 16px 0 22px 24px;
          border-bottom: 1px solid var(--el-border-color);
          &:last-child {
            border-bottom: none;
          }
          .check_title {
            font-weight: bold;
            margin-bottom: 10px;
          }
          .check_list {
            .el-checkbox-group {
              display: flex;
              flex-wrap: wrap;
              .el-checkbox {
                display: flex;
                width: 25%;
                margin-right: 0;
                margin-bottom: 10px;
                display: flex;
                align-items: center;
                outline: 0;
                .el-checkbox__label {
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                }
              }
            }
          }
        }
      }
    }
  }
  .el-dialog__footer {
    .el-button {
      width: 15%;
    }
  }
}
</style>
