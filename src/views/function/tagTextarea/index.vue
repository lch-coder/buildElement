<template>
  <div m-2 w-500px>
    <div mb-2>
      <el-input v-model="inputValue" placeholder="请输入文本">
        <template #append>
          <el-button @click="insert">添加</el-button>
        </template>
      </el-input>
    </div>
    <div flex flex-wrap gap-2 my-2>
      <el-tag v-for="item in entityFieldList" :key="item.code" @click="insertEntity(item)"> {{ item.name }}</el-tag>
    </div>
    <code-mirror
      ref="mirrorRef"
      v-model="value"
      :wrap="true"
      :minimal="true"
      :disabled="false"
      placeholder="请输入..."
      :extensions="[placeholders]"
      @ready="onReady"
    />
    <div my-2>文本内容：</div>
    <div>
      {{ value }}
    </div>
  </div>
</template>

<script setup lang="ts" name="tagTextarea">
import { ref, type Ref } from 'vue'
import CodeMirror from 'vue-codemirror6'
import {
  MatchDecorator,
  WidgetType,
  Decoration,
  DecorationSet,
  EditorView,
  ViewPlugin,
  ViewUpdate,
} from '@codemirror/view'
interface IEntityField {
  name: string
  code: string
}

const entityFieldList: IEntityField[] = [
  {
    name: '创建时间',
    code: 'createdTime',
  },
  {
    name: '创建用户ID',
    code: 'createdUserId',
  },
  {
    name: '创建用户姓名',
    code: 'createdUserName',
  },
  {
    name: '最后修改时间',
    code: 'lastModifiedTime',
  },
  {
    name: '最后修改用户ID',
    code: 'lastModifiedUserId',
  },
  {
    name: '最后修改用户姓名',
    code: 'lastModifiedUserName',
  },
  {
    name: '订单编号',
    code: 'order_number',
  },
  {
    name: '商品编号',
    code: 'product_number',
  },
  {
    name: '商品数量',
    code: 'product_shuliang',
  },
  {
    name: '商品价格',
    code: 'product_price',
  },
  {
    name: '订单类型',
    code: 'order_type',
  },
  {
    name: '订单金额',
    code: 'order_price',
  },
  {
    name: '订单优惠金额',
    code: 'order_salePrice',
  },
  {
    name: '订单支付金额',
    code: 'order_payPrice',
  },
  {
    name: '租户ID',
    code: 'tenantId',
  },
  {
    name: '业务空间ID',
    code: 'businessZoneId',
  },
  {
    name: '应用实例ID',
    code: 'appInstanceId',
  },
]

const inputValue = ref()
const value = ref('Dear {name},\nYour {item} is on its way. Please see {order} for details.\n')

const mirrorRef = ref()
let editView = ref<EditorView>()

class PlaceholderWidget extends WidgetType {
  name: string
  constructor(name: string) {
    super()
    this.name = name
  }
  eq(other: PlaceholderWidget) {
    return this.name === other.name
  }
  toDOM() {
    let elt = document.createElement('span')
    elt.style.cssText = `
            box-sizing: border-box;
            margin: 3px;
            color: #000000d9;
            list-style: none;
            display: inline-block;
            height: auto;
            padding: 0 6px;
            font-size: 14px;
            line-height: 20px;
            white-space: nowrap;
            border: 1px solid #d9d9d9;
            border-radius: 2px;
            color: #096dd9;
            background: #e6f7ff;
            border-color: #91d5ff;
          `
    elt.textContent = this.name
    return elt
  }
  ignoreEvent() {
    return false
  }
}

const placeholderMatcher = new MatchDecorator({
  regexp: /\{(.*?)\}/g,
  decoration: match => {
    let label = match[1]
    let select = entityFieldList.find(item => item.code === match[1])
    select && (label = select.name)
    return Decoration.replace({
      widget: new PlaceholderWidget(label),
    })
  },
})

const placeholders = ViewPlugin.fromClass(
  class {
    placeholders: DecorationSet
    constructor(view: EditorView) {
      this.placeholders = placeholderMatcher.createDeco(view)
    }
    update(update: ViewUpdate) {
      this.placeholders = placeholderMatcher.updateDeco(update, this.placeholders)
    }
  },
  {
    decorations: instance => instance.placeholders,
    provide: plugin =>
      EditorView.atomicRanges.of(view => {
        return view.plugin(plugin)?.placeholders || Decoration.none
      }),
  }
)

function onReady({ view }: { view: Ref<EditorView> }) {
  editView.value = view.value
}

/***
 * 获取光标位置
 */
function getCursor() {
  return editView.value?.state.selection.main.head || 0
}

const insert = () => {
  if (!inputValue.value) {
    ElMessage.warning('请先输入文本')
    return
  }
  mirrorRef.value.replaceSelection(`{${inputValue.value}}`)
  editView.value?.focus()
  inputValue.value = ''
}

/**
 * 插入实体属性
 * @param item
 */
function insertEntity(item: IEntityField) {
  mirrorRef.value.replaceSelection(`{${item.code}}`)
  editView.value?.focus()
}
</script>

<style scoped>
:deep(.cm-editor) {
  max-height: 200px;
  border: 1px solid silver;
  font-size: 14px;
}
</style>
