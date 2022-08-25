import { defineStore } from 'pinia'

interface ProcessListProps {
  label: string //名称
  value: string //路径
  name: string //路由name
  active: boolean //是否激活
}

type ProcessStateTypes = {
  processList: ProcessListProps[]
}

const ignoreList = ['redirect', 'notFound', 'login', '403', '404', '500']

export const useProcessStore = defineStore({
  // persist: true,
  id: 'process',
  state: (): ProcessStateTypes => ({
    processList: [],
  }),
  getters: {},
  actions: {
    // 增加切卡
    addProcess(payload: ProcessListProps) {
      const index = this.processList.findIndex((e: ProcessListProps) => {
        return e.value.split('?')[0] === payload.value.split('?')[0]
      })
      this.processList.map((e: ProcessListProps) => {
        e.active = e.value === payload.value
      })

      if (index < 0) {
        if (ignoreList.includes(payload.label)) return
        if (payload.value === '/') {
          payload.label = '首页'
        }

        if (payload.label) {
          this.processList.push({
            ...payload,
            active: true,
          })
        }
      } else {
        this.processList[index].active = true
        this.processList[index].label = payload.label
        this.processList[index].value = payload.value
      }
    },

    // 删除切卡
    delProcess(index: number) {
      this.processList.splice(index, 1)
    },

    // 设置切卡
    setProcess(payload: ProcessListProps[]) {
      this.processList = payload
    },

    // 重置切卡
    resetProcess() {
      this.processList = []
    },
  },
})
