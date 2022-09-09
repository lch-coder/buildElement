<script lang="ts" setup>
import { useMenuStore } from '@/store'
const menuStore = useMenuStore()
const route = useRoute()
const menu = ref()
/**
 * 获取树节点路径
 * @param {*} curKey 树节点标识的值
 * @param {array} data 树
 * @returns {array} result 存放搜索到的树节点到顶部节点的路径节点
 */
const getPathByKey = (curKey: string, data: any) => {
  /** 存放搜索到的树节点到顶部节点的路径节点 */
  let result: any = []
  /**
   * 路径节点追踪
   * @param {*} curKey 树节点标识的值
   * @param {array} path 存放搜索到的树节点到顶部节点的路径节点
   * @param {*} data 树
   * @returns array
   */
  let traverse = (curKey: string, path: any, data: any) => {
    // 树为空时，不执行函数
    if (data.length === 0) {
      return
    }

    // 遍历存放树的数组
    for (let item of data) {
      // 遍历的数组元素存入path参数数组中
      path.push(item)
      // 如果目的节点的name值等于当前遍历元素的节点name值
      if (item.name === curKey) {
        // 把获取到的节点路径数组path赋值到result数组
        result = JSON.parse(JSON.stringify(path))
        return
      }

      // 当前元素的children是数组
      const children = Array.isArray(item.children) ? item.children : []
      // 递归遍历子数组内容
      traverse(curKey, path, children)
      // 利用回溯思想，当没有在当前叶树找到目的节点，依次删除存入到的path数组路径
      path.pop()
    }
  }
  traverse(curKey, [], data)
  // 返回找到的树节点路径
  return result
}

// /** 对应树节点路径(数组形式) */
// let pathList = getPathByKey(3100, treeData)
// console.log('pathList', pathList) /*
//   pathList [
//   { name: '机车人', id: 3, children: [ [Object], [Object] ] },
//   { name: '通天教主', id: 31, children: [ [Object] ] },
//   { name: '孙悟空', id: 310, children: [ [Object] ] },
//   { name: '猪八戒', id: 3100 }
// ]
// */
// /** 对应树节点路径 */
// let pathUrl = pathList.map(item => item.name).join(' / ')
// console.log('pathUrl', pathUrl) /*
//   机车人 / 通天教主 / 孙悟空 / 猪八戒
// */

onMounted(() => {
  menu.value = getPathByKey(route.name as string, menuStore.menuList)
})
</script>

<template>
  <MenuBox v-if="menu" :menuList="menu" :hierarchy="1"></MenuBox>
</template>
