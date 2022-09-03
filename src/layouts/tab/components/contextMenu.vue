<template>
  <teleport to="body">
    <transition name="el-zoom-in-center">
      <div class="dropdown-popper" :style="{ left, top }">
        <ul ref="contextMenuRef" class="context-menu" v-if="visible">
          <li
            v-for="item in options"
            :key="item.key"
            :class="{ 'context-menu-item': true, 'is-disabled': item.disabled }"
            @click="handleClick(item)"
          >
            <i :class="item.icon" m-r-2></i>
            {{ item.label }}
          </li>
        </ul>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { useTabStore, useAppStore } from '@/store'

interface Props {
  /** 右键菜单可见性 */
  visible?: boolean
  /** 当前标签 */
  currentTab: Tab
  /** 鼠标x坐标 */
  left: string
  /** 鼠标y坐标 */
  top: string
}

type DropdownKey = 'reload-current' | 'close-current' | 'close-other' | 'close-left' | 'close-right' | 'close-all'
type Option = {
  label: string
  key: DropdownKey
  disabled?: boolean
  icon: string
}

const props = withDefaults(defineProps<Props>(), {
  visible: false,
})

interface Emits {
  (e: 'update:visible', visible: boolean): void
}
const emit = defineEmits<Emits>()

function hide() {
  emit('update:visible', false)
}
const contextMenuRef = ref(null)
onClickOutside(contextMenuRef, () => {
  hide()
})

const tabStore = useTabStore()
const appStore = useAppStore()
const options = computed<Option[]>(() => [
  {
    label: '重新加载',
    key: 'reload-current',
    disabled: props.currentTab?.fullPath !== tabStore.activeTab,
    icon: 'i-ant-design-reload-outlined',
  },
  {
    label: '关闭当前',
    key: 'close-current',
    disabled: props.currentTab?.fullPath === tabStore.tabList?.[0]?.fullPath,
    icon: 'i-ant-design-close-outlined',
  },
  {
    label: '关闭其他',
    key: 'close-other',
    icon: 'i-ant-design-column-width-outlined',
  },
  {
    label: '关闭左侧',
    key: 'close-left',
    icon: 'i-mdi-format-horizontal-align-left',
  },
  {
    label: '关闭右侧',
    key: 'close-right',
    icon: 'i-mdi-format-horizontal-align-right',
  },
  {
    label: '关闭所有',
    key: 'close-all',
    icon: 'i-ant-design-line-outlined',
  },
])
const actionMap = new Map<string, () => void>([
  [
    'reload-current',
    () => {
      appStore.reloadPage()
    },
  ],
  [
    'close-current',
    () => {
      tabStore.removeTab(props.currentTab)
    },
  ],
  [
    'close-other',
    () => {
      tabStore.clearOtherTab(props.currentTab)
    },
  ],
  [
    'close-left',
    () => {
      tabStore.clearLeftTab(props.currentTab)
    },
  ],
  [
    'close-right',
    () => {
      tabStore.clearRightTab(props.currentTab)
    },
  ],
  [
    'close-all',
    () => {
      tabStore.clearAllTab()
    },
  ],
])

const handleClick = (item: Option) => {
  if (item.disabled) return
  const fn = actionMap.get(item.key)
  fn?.()
  hide()
}
</script>

<style lang="scss" scoped>
.dropdown-popper {
  position: absolute;
  z-index: 100;
  background: var(--el-bg-color-overlay);
  border: 1px solid var(--el-border-color-light);
  box-shadow: var(--el-dropdown-menu-box-shadow);
  .context-menu {
    position: relative;
    padding: 5px 0;
    margin: 0;
    background-color: var(--el-bg-color-overlay);
    border-radius: var(--el-border-radius-base);
    .context-menu-item {
      display: flex;
      align-items: center;
      white-space: nowrap;
      list-style: none;
      line-height: 22px;
      padding: 5px 16px;
      margin: 0;
      font-size: var(--el-font-size-base);
      color: var(--el-text-color-regular);
      cursor: pointer;
      outline: none;
      &.is-disabled {
        cursor: not-allowed;
        color: var(--el-text-color-disabled);
      }
      &:not(.is-disabled):hover {
        background-color: var(--el-color-primary-light-9);
        color: var(--el-color-primary);
      }
    }
  }
}

.i-ant-design-reload-outlined {
  --un-icon: url("data:image/svg+xml;utf8,%3Csvg preserveAspectRatio='xMidYMid meet' viewBox='0 0 1024 1024' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92C290 92 102.3 279.5 102 511.5C101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1c1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 0 0-10.1 4.8c-1.8 5-3.8 10-5.9 14.9c-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 0 1 655.9 829c-42.3 17.9-87.4 27-133.8 27c-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 0 1 279 755.2a342.16 342.16 0 0 1-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4c31.6-31.6 68.4-56.4 109.3-73.8c42.3-17.9 87.4-27 133.8-27c46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 0 1 109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 0 0 3 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z'/%3E%3C/svg%3E");
  mask: var(--un-icon) no-repeat;
  mask-size: 100% 100%;
  -webkit-mask: var(--un-icon) no-repeat;
  -webkit-mask-size: 100% 100%;
  background-color: currentColor;
  width: 1.2em;
  height: 1.2em;
}
.i-ant-design-close-outlined {
  --un-icon: url("data:image/svg+xml;utf8,%3Csvg preserveAspectRatio='xMidYMid meet' viewBox='0 0 1024 1024' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8L295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512L196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1l216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z'/%3E%3C/svg%3E");
  mask: var(--un-icon) no-repeat;
  mask-size: 100% 100%;
  -webkit-mask: var(--un-icon) no-repeat;
  -webkit-mask-size: 100% 100%;
  background-color: currentColor;
  width: 1.2em;
  height: 1.2em;
}
.i-ant-design-column-width-outlined {
  --un-icon: url("data:image/svg+xml;utf8,%3Csvg preserveAspectRatio='xMidYMid meet' viewBox='0 0 1024 1024' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M180 176h-60c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8zm724 0h-60c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8zM785.3 504.3L657.7 403.6a7.23 7.23 0 0 0-11.7 5.7V476H378v-62.8c0-6-7-9.4-11.7-5.7L238.7 508.3a7.14 7.14 0 0 0 0 11.3l127.5 100.8c4.7 3.7 11.7.4 11.7-5.7V548h268v62.8c0 6 7 9.4 11.7 5.7l127.5-100.8c3.8-2.9 3.8-8.5.2-11.4z'/%3E%3C/svg%3E");
  mask: var(--un-icon) no-repeat;
  mask-size: 100% 100%;
  -webkit-mask: var(--un-icon) no-repeat;
  -webkit-mask-size: 100% 100%;
  background-color: currentColor;
  width: 1.2em;
  height: 1.2em;
}
.i-mdi-format-horizontal-align-left {
  --un-icon: url("data:image/svg+xml;utf8,%3Csvg preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M11 16v-3h10v-2H11V8l-4 4l4 4m-8 4h2V4H3v16Z'/%3E%3C/svg%3E");
  mask: var(--un-icon) no-repeat;
  mask-size: 100% 100%;
  -webkit-mask: var(--un-icon) no-repeat;
  -webkit-mask-size: 100% 100%;
  background-color: currentColor;
  width: 1.2em;
  height: 1.2em;
}
.i-mdi-format-horizontal-align-right {
  --un-icon: url("data:image/svg+xml;utf8,%3Csvg preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M13 8v3H3v2h10v3l4-4l-4-4m6 12h2V4h-2v16Z'/%3E%3C/svg%3E");
  mask: var(--un-icon) no-repeat;
  mask-size: 100% 100%;
  -webkit-mask: var(--un-icon) no-repeat;
  -webkit-mask-size: 100% 100%;
  background-color: currentColor;
  width: 1.2em;
  height: 1.2em;
}
.i-ant-design-line-outlined {
  --un-icon: url("data:image/svg+xml;utf8,%3Csvg preserveAspectRatio='xMidYMid meet' viewBox='0 0 1024 1024' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z'/%3E%3C/svg%3E");
  mask: var(--un-icon) no-repeat;
  mask-size: 100% 100%;
  -webkit-mask: var(--un-icon) no-repeat;
  -webkit-mask-size: 100% 100%;
  background-color: currentColor;
  width: 1.2em;
  height: 1.2em;
}
.i-ant-design-line-outlined {
  --un-icon: url("data:image/svg+xml;utf8,%3Csvg preserveAspectRatio='xMidYMid meet' viewBox='0 0 1024 1024' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z'/%3E%3C/svg%3E");
  mask: var(--un-icon) no-repeat;
  mask-size: 100% 100%;
  -webkit-mask: var(--un-icon) no-repeat;
  -webkit-mask-size: 100% 100%;
  background-color: currentColor;
  width: 1.2em;
  height: 1.2em;
}
</style>
