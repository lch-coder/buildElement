<template>
  <div m-2 w-500px>
    <div flex flex-wrap gap-2 my-2>
      <el-tag v-for="item in entityFieldList" :key="item.code" :type="item.type" @click="insertEntity(item)">
        {{ item.name }}</el-tag
      >
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

<script setup lang="ts" name="multiTagTextarea">
import { ref, type Ref, render } from 'vue'
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
// import { ElTag } from 'element-plus'

interface IEntityField {
  name: string
  code: string
  type?: '' | 'success' | 'warning' | 'info' | 'danger'
}

const entityFieldList: IEntityField[] = [
  {
    name: '创建时间',
    code: 'createdTime',
    type: 'success',
  },
  {
    name: '创建用户ID',
    code: 'createdUserId',
  },
  {
    name: '创建用户姓名',
    code: 'createdUserName',
    type: 'warning',
  },
  {
    name: '最后修改时间',
    code: 'lastModifiedTime',
    type: 'warning',
  },
  {
    name: '最后修改用户ID',
    code: 'lastModifiedUserId',
    type: 'info',
  },
  {
    name: '最后修改用户姓名',
    code: 'lastModifiedUserName',
    type: 'success',
  },
  {
    name: '订单编号',
    code: 'order_number',
    type: 'success',
  },
  {
    name: '商品编号',
    code: 'product_number',
    type: 'danger',
  },
  {
    name: '商品数量',
    code: 'product_shuliang',
    type: 'info',
  },
  {
    name: '商品价格',
    code: 'product_price',
    type: 'danger',
  },
  {
    name: '订单类型',
    code: 'order_type',
    type: 'success',
  },
  {
    name: '订单金额',
    code: 'order_price',
    type: 'info',
  },
  {
    name: '订单优惠金额',
    code: 'order_salePrice',
    type: 'success',
  },
  {
    name: '订单支付金额',
    code: 'order_payPrice',
  },
  {
    name: '租户ID',
    code: 'tenantId',
    type: 'danger',
  },
  {
    name: '业务空间ID',
    code: 'businessZoneId',
    type: 'success',
  },
  {
    name: '应用实例ID',
    code: 'appInstanceId',
  },
]

const value = ref('{appInstanceId}{order_price}{order_number}{createdUserId}')

const mirrorRef = ref()
let editView = ref<EditorView>()

class PlaceholderWidget extends WidgetType {
  data: IEntityField
  constructor(data: IEntityField) {
    super()
    this.data = data
  }
  eq(other: PlaceholderWidget) {
    return this.data.name === other.data.name
  }
  toDOM() {
    //创建tag元素
    const ele = document.createElement('span')
    // let props = { type: this.data.type }
    // const node = h(ElTag, props, { default: () => this.data.name })
    // render(node, ele)
    // ele.style.cssText = `
    //         margin: 3px;
    //         display: inline-block;
    //       `
    ele.className = `el-tag ${this.data.type ? `el-tag--${this.data.type}` : ''} el-tag--light`
    ele.style.cssText = `
            margin: 3px;
            padding: 0 6px;
          `
    ele.innerHTML = `
        <span class="el-tag__content">${this.data.name}</span>
      `
    return ele
  }
  ignoreEvent() {
    return false
  }
}

const placeholderMatcher = new MatchDecorator({
  regexp: /\{([\s\S]*?)\}/g,
  decoration: match => {
    let label = match[1]
    let select = entityFieldList.find(item => item.code === label)!
    return Decoration.replace({
      widget: new PlaceholderWidget(select),
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

/**
 * 插入实体属性
 * @param item
 */
function insertEntity(item: IEntityField) {
  mirrorRef.value.replaceSelection(`{${item.code}}`)
  editView.value?.focus()
}
</script>

<style lang="scss" scoped>
:deep(.cm-editor) {
  max-height: 200px;
  border: 1px solid silver;
  font-size: 14px;
}
</style>
