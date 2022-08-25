import { defineComponent, reactive, ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useProcessStore } from '@/store/modules/process'
import { useMenuStore } from '@/store/modules/menu'

import './index.scss'

interface ProcessListProps {
  label: string
  value: string
  active?: boolean
  name?: string
}

interface StyleProps {
  left: string
  top: string
}

interface MenuProps {
  visible: boolean
  current: any
  style: StyleProps
}

export default defineComponent({
  mounted() {
    this.$el.oncontextmenu = (event: Event) => {
      event.returnValue = false
    }
  },
  setup() {
    const processStore = useProcessStore()
    const menuStore = useMenuStore()
    const router = useRouter()
    const app_process__scroller = ref<null | HTMLElement>(null)
    const menu = reactive<MenuProps>({
      visible: false,
      current: {},
      style: {
        left: '0px',
        top: '0px',
      },
    })

    const isHit = ref(false)

    const processList = computed(() => processStore.processList)
    onMounted(() => {
      document.body.addEventListener('click', () => {
        if (menu.visible) {
          menu.visible = false
        }
      })
    })

    const onTap = (e: MouseEvent, item: any) => {
      e.stopPropagation()
      isHit.value = item.active
      if (e.button === 0) {
        router.push(item.value)
      } else {
        menu.visible = true
        menu.current = item
        menu.style.left = e.pageX + 'px'
        menu.style.top = e.pageY + 'px'
      }
    }
    const toPath = () => {
      const active = processList.value.find((e: ProcessListProps) => e.active)
      if (!active) {
        const next = processList.value[processList.value.length - 1]
        router.push(next ? next.value : '/')
      }
    }

    const onDel = (index: number) => {
      processStore.delProcess(index)
      toPath()
      menuStore.resetCache(router.currentRoute.value.name as string)
    }

    const onClose = (cmd: string) => {
      const { current } = menu

      switch (cmd) {
        case 'refresh':
          router.replace({
            path: '/redirect' + router.currentRoute.value.path,
            query: router.currentRoute.value.query,
          })
          break
        case 'current':
          onDel(processList.value.findIndex((e: ProcessListProps) => e.value === current.value))
          break
        case 'other':
          processStore.setProcess(
            processList.value.filter((e: ProcessListProps) => e.value === current.value || e.value === '/')
          )
          menuStore.resetCache()
          break

        case 'all':
          processStore.setProcess(processList.value.filter((e: ProcessListProps) => e.value === '/'))
          menuStore.resetCache()
          break
      }

      toPath()
    }

    const toLeft = () => {
      const scroller = app_process__scroller.value
      scroller?.scrollTo(scroller?.scrollLeft - 100, 0)
    }
    const toRight = () => {
      const scroller = app_process__scroller.value
      scroller?.scrollTo(scroller?.scrollLeft + 100, 0)
    }

    return {
      app_process__scroller,
      onClose,
      menu,
      isHit,
      onTap,
      onDel,
      processList,
      toLeft,
      toRight,
    }
  },

  render() {
    return (
      <div class="app-process">
        <div class="app-process__left hidden-xs-only" onClick={this.toLeft}>
          <i class="i-ep-arrow-left"></i>
        </div>

        <div ref="app_process__scroller" class="app-process__scroller">
          {this.processList.map((item: any, index: number) => {
            return (
              <div
                class={{
                  block: true,
                  active: item.active,
                }}
                key={index}
                data-index={index}
                onMousedown={e => {
                  this.onTap(e, item)
                }}
              >
                <span>{item.label}</span>
                {index > 0 && (
                  <i
                    class="i-ep-close active"
                    onMousedown={e => {
                      e.stopPropagation()
                      this.onDel(index)
                    }}
                  />
                )}
              </div>
            )
          })}
        </div>

        <div class="app-process__right hidden-xs-only" onClick={this.toRight}>
          <i class="i-ep-arrow-right"></i>
        </div>

        <ul class="context-menu" v-show={this.menu.visible} style={this.menu.style}>
          {this.isHit && <li onClick={() => this.onClose('refresh')}>刷新</li>}
          {this.isHit && this.menu.current.label !== '首页' && (
            <li onClick={() => this.onClose('current')}>关闭当前</li>
          )}
          <li onClick={() => this.onClose('other')}>关闭其他</li>
          <li onClick={() => this.onClose('all')}>关闭所有</li>
        </ul>
      </div>
    )
  },
})
