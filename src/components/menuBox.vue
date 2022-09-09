<template>
  <div p-4 m-2 :class="'bg-purple-' + props.hierarchy * 100">
    <h2>{{ props?.menuList?.[0].title }}</h2>
    <menuBox v-if="currentList.length > 0" :menuList="currentList" :hierarchy="++props.hierarchy"></menuBox>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string
  children?: Props[]
}
const props: any = defineProps({
  menuList: Array<Props>,
  hierarchy: Number,
})

let currentList = props.menuList.slice(1)
</script>
