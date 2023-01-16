import { sortBy, isNumber } from 'lodash-es'

export const getOption = (data: any, dataFormatEnum: string, selectSeries: any) => {
  const { chartType, chartName } = data
  const option = Object.assign(data, {
    tooltip: {},
    title: { text: chartName, triggerEvent: true },
    grid: {
      top: '20%', //距上边距
      left: '10%', //距离左边距
      right: '10%', //距离右边距
      bottom: '10%', //距离下边距
      containLabel: true,
    },
    legend: {
      y: '35',
      type: 'scroll',
    },
  })

  // tooltip设置
  if (chartType === 'funnel') {
    option.tooltip.trigger = 'item'
    option.tooltip.formatter = '{a} <br/>{b} : {c}'
  } else if (chartType === 'pie') {
    option.tooltip.trigger = 'item'
    option.tooltip.formatter = '{a} {b} : {c} ({d}%)'
  } else {
    option.tooltip.trigger = 'axis'
    option.tooltip.formatter = function (params: any) {
      let res = ''
      for (let i = 0; i < params.length; i++) {
        const series = params[i]
        // 百分比处理
        if (dataFormatEnum === 'percentage' && isNumber(series.data)) {
          series.data = series.data?.mul(100) + '%'
        }
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
    }
  }
  // 横向滚动条
  if (option?.xAxis?.[0]?.data?.length >= 20) {
    option.dataZoom = {
      start: 0,
      end: Math.floor(100 / option?.xAxis?.[0]?.data?.length) * 20,
      type: 'slider',
      show: true,
      borderColor: 'transparent',
      borderCap: 'round',
      xAxisIndex: [0],
      height: 6, //组件高度
      left: 20, //左边的距离
      right: 20, //右边的距离
      bottom: 10, //下边的距离
      fillerColor: 'rgba(27,90,169,1)',
      handleIcon:
        'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5M36.9,35.8h-1.3z M27.8,35.8 h-1.3H27L27.8,35.8L27.8,35.8z', // 画一个圆形
      handleSize: '100%',
      handleStyle: {
        color: 'rgba(27,90,169,1)',
        borderWidth: 0,
      },
      // backgroundColor: 'rgba(37, 46, 100, 0.8)', //两边未选中的滑动条区域的颜色
      showDataShadow: false, //是否显示数据阴影 默认auto
      showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
      filterMode: 'filter',
    }
  }
  option?.yAxis?.forEach((item: any, index: number) => {
    // 百分比处理
    if (dataFormatEnum === 'percentage' && index === 0) {
      item.axisLabel = {
        show: true,
        interval: 'auto',
        formatter: (val: number) => {
          return val.mul(100) + '%'
        },
      }
    }
    item.nameTextStyle = {
      padding: [0, 40, 0, 0],
    }
  })
  option?.xAxis?.forEach((item: any) => {
    item.nameLocation = 'middle'
    item.nameTextStyle = {
      padding: 10,
    }
  })
  option?.series?.forEach((item: any) => {
    // 饼图设置
    if (item.type === 'pie') {
      Object.assign(item, {
        radius: ['40%', '70%'],
        label: {
          show: false,
          position: 'center',
        },
        labelLine: {
          show: false,
        },
      })
    }
  })
  return option
}
/*
 **获取最新布局位置
 */
export const getPosition = (layout: any[]) => {
  layout = sortBy(layout, ['y', 'x'])
  const len = layout.length
  if (layout[len - 1]) {
    const { x, y, w, h } = layout[len - 1]
    let newX = x,
      newY = y
    if (x + w >= 12) {
      newX = 0
      newY = y + h
    } else {
      newX = x + w
    }
    return { x: newX, y: newY, w, h }
  }
  return { x: 0, y: 100, w: 4, h: 11 }
}
