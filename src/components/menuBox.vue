<template>
  <div p-4 m-2 :class="`bg-purple-${currentHierarchy}`">
    <h2>{{ props?.menuList?.[0].title }}</h2>
    <menuBox v-if="currentList.length > 0" :menu-list="currentList" :hierarchy="currentHierarchy"></menuBox>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  menuList: any
  hierarchy: number
}

const props = withDefaults(defineProps<Props>(), {
  menuList: [],
  hierarchy: 100,
})

let currentList = props.menuList.slice(1)
let currentHierarchy = props.hierarchy + 100
</script>

<script lang="ts">
export default {
  name: 'MenuBox',
}
</script>
