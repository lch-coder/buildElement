<template>
  <div h-full>
    <v-chart
      ref="chartRef"
      autoresize
      :update-options="{ notMerge: true }"
      :option="option"
      @mousemove="
          (params:any) => {
            selectSeries = params.seriesName
          }
        "
      @mouseout="
        () => {
          selectSeries = ''
        }
      "
      @click="clickChart"
    ></v-chart>
  </div>
</template>

<script lang="ts" setup>
const selectSeries = ref('')
const chartRef = ref()
const option = ref({
  title: {
    text: 'Stacked Line',
    triggerEvent: true,
  },
  tooltip: {
    trigger: 'axis',
    formatter: function (params: any[]) {
      let res = ''
      for (let i = 0; i < params.length; i++) {
        const series = params[i]
        // 移动到具体点的时候展示该坐标点数据，否则展示全部
        if (selectSeries.value) {
          if (series.seriesName === selectSeries.value) {
            res = series.axisValue + '<br/>' + series.marker + series.seriesName + ' : ' + series.data + '<br/>'
            break
          }
        } else {
          if (i === 0) {
            res += series.axisValue + '<br/>'
          }
          res += series.marker + series.seriesName + ' : ' + series.data + '<br/>'
        }
      }
      return res
    },
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
    type: 'scroll',
  },
  grid: {
    top: '20%', //距上边距
    left: '10%', //距离左边距
    right: '10%', //距离右边距
    bottom: '10%', //距离下边距
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320],
    },
  ],
})

const clickChart = (params: any) => {
  const key = Object.keys(params.event.target).find(key => key.includes('ec_inner')) || ''
  const res = params.event.target[key]

  console.log(`当前点击了第${res.dataIndex}组数据中的第${res.seriesIndex}条数据`)

  const pointInPixel = [params.event.event.offsetX, params.event.event.offsetY]
  if (chartRef.value.containPixel('grid', pointInPixel)) {
    let xIndex = chartRef.value.chart.convertFromPixel({ seriesIndex: 0 }, pointInPixel)[0]
    xIndex = parseInt(xIndex)
    console.log('x轴索引', xIndex)
  }
}
</script>
