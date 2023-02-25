<template>
  <div m-2>
    <!-- <el-divider title-placement="center">颜色主题</el-divider>
    <el-row :gutter="35" w-310px>
      <el-col v-for="color in theme.themeColorList" :key="color" :span="4" class="flex-x-center">
        <ColorCheckbox :color="color" :checked="color === theme.themeColor" @click="setThemeColor(color)" />
      </el-col>
    </el-row>
    <el-divider title-placement="center">其他颜色</el-divider>
    <el-color-picker v-model="theme.themeColor" /> -->

    <el-tag>更换主题色</el-tag>
    <el-color-picker v-model="defaultTheme" @change="changeTheme" />
  </div>
</template>
<script lang="ts" setup>
import { useElementPlusTheme } from '@/composables'
import { writeNewStyle, createNewStyle } from '@/utils/theme'
const theme = reactive({
  themeColor: '#1890FF',
  themeColorList: [
    '#1890FF',
    '#409EFF',
    '#2D8CF0',
    '#007AFF',
    '#5AC8FA',
    '#5856D6',
    '#536DFE',
    '#9C27B0',
    '#AF52DE',
    '#0096C7',
    '#00C1D4',
    '#34C759',
    '#43A047',
    '#7CB342',
    '#C0CA33',
    '#78DEC7',
    '#E53935',
    '#D81B60',
    '#F4511E',
    '#FB8C00',
    '#FFB300',
    '#FDD835',
    '#6D4C41',
    '#546E7A',
  ],
})

const setThemeColor = (color: string) => {
  theme.themeColor = color
}

const setEpThemeColor = (color: string) => {
  writeNewStyle(createNewStyle(color) as any)
}
watch(
  () => theme.themeColor,
  () => {
    setEpThemeColor(theme.themeColor)
  }
)

const defaultTheme = ref('#405DFF')

const { changeTheme } = useElementPlusTheme(defaultTheme.value)
</script>
