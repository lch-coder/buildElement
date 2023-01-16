<template>
  <div h-100 p-1>
    <div id="container" h-full></div>
  </div>
</template>

<script lang="ts" setup>
import { Chart } from '@antv/g2'

const state = reactive({
  chart: null as any,
  showData: [
    //图表中将要显示的数据
    {
      label: '1951 年',
      value: 38,
    },
    {
      label: '1952 年',
      value: 52,
    },
    {
      label: '1956 年',
      value: 61,
    },
    {
      label: '1957 年',
      value: 145,
    },
    {
      label: '1958 年',
      value: 48,
    },
    {
      label: '1959 年',
      value: 38,
    },
    {
      label: '1960 年',
      value: 38,
    },
    {
      label: '1962 年',
      value: 38,
    },
  ],
})

//创建chart
function createChart() {
  state.chart = new Chart({
    container: 'container', //chart容器id
    // width: 800, //图标宽度
    // height: 400, //图表高度
    padding: [80, 40, 80, 40], //图表内边距,依次为:上，右，下，左
    // defaultInteractions:"ellipsis-text",//配置图表默认交互，仅支持字符串形式。G2 默认支持的交互有 'tooltip', 'legend-filter', 'legend-active', 'continuous-filter', 'ellipsis-text'
    pixelRatio: window.devicePixelRatio, //设置设备像素比，默认取浏览器的值 window.devicePixelRatio
    renderer: 'canvas', //指定渲染引擎，默认使用 canvas。可选：'canvas' | 'svg'
    theme: 'dark', //配置主题，目前 g2 默认有 dark 主题模式，如需要自定义配置，可以先通过 registerTheme 注册主题，再设置主题 key。
    visible: true, //chart 是否可见，默认为 true，设置为 false 则会隐藏。
    autoFit: true, //图表是否自适应容器宽高，默认为 false
  })
}

//设置数据
function setChartData() {
  state.chart.data(state.showData)
}
//设置坐标轴
function setChartAxis() {
  state.chart.scale('value', {
    //Y轴 字段是 度量
    nice: true, //是否自动调整 min、max 。默认为false
    min: 10, //度量最小值，
    max: 200, //度量最大值，如果不需要指定最大值可以设置max=null，或者不要填该参数
  })
  //设置Y轴
  //   state.chart.axis('value', false) //不需要Y轴，可以设置false
  state.chart.axis('value', {
    //Y轴样式
    grid: {
      line: {
        type: 'line',
        style: {
          // fill:'#ff0000',
          stroke: '#fff',
          opacity: 0.3,
          lineDash: [1, 3], //虚线
        },
      },
    },
    label: {
      style: {
        fill: '#fff', //文字颜色
        fontFamily: 'Microsoft YaHei', //文字字体
        fontWeight: 400, //文字粗细
        fontSize: 12, //文字大小
      },
    },
    line: {
      style: {
        stroke: '#fff', //坐标轴颜色
      },
    },
    tickLine: {
      style: {
        stroke: '#fff', //刻度线颜色
      },
    },
    subTickLine: {
      style: {
        stroke: '#fff', //小刻度颜色
      },
    },
  })

  //设置X轴
  //state.chart.axis("name",false);//不需要Y轴，可以设置false
  state.chart.axis('name', {
    //X轴样式
    label: {
      formatter: (val: any) => {
        return val
        // return +val * 100 + '%';
      },
      style: {
        fill: '#fff', //文字颜色
        fontFamily: 'Microsoft YaHei', //文字字体
        fontWeight: 400, //文字粗细
        fontSize: 12, //文字大小
      },
    },
    line: {
      style: {
        stroke: '#fff', //坐标轴颜色
      },
    },
    tickLine: {
      style: {
        stroke: '#fff', //刻度线颜色
      },
    },
    subTickLine: {
      style: {
        stroke: '#fff', //小刻度颜色
      },
    },
  })
}
//设置提示框信息样式
function setChartTooltip() {
  //   state.chart.tooltip(false)
  state.chart.tooltip({
    showMarkers: false,
    domStyles: {
      'g2-tooltip': {
        background: 'rgba(00, 00, 00,0.5)', //背景RGBA形式的值
        color: '#ffffff', //文字颜色
        boxShadow: '0px 0px 5px #000000', //阴影大小 阴影颜色
      },
    },
    customItems: (items: any) => {
      //自定义显示的内容格式
      items[0].name = 'value'
      return items
    },
  })
}
//设置图表柱子相关属性【柱子样式】
function setChartStyle() {
  let line = state.chart.line()
  line
    .style({
      lineWidth: 2,
    })
    .state({
      // selected:{
      //   style:{
      //     stroke:'red',
      //   }
      // }
      active: {
        style: {
          stroke: '#2681ff', //鼠标经过 折线颜色
        },
      },
    })
    .position('label' + '*' + 'value') //X轴 * Y轴
    .color('#2681ff') //折线颜色
    .shape('circle') //曲率

  //折线上是否显示值标签
  //line.label(false);//不需要显示，可以设置false
  line.label('value', {
    //标签值
    content: (originData: any) => {
      return originData['value'] + '万' //设置值标签最终显示的内容
    },
    style: {
      fill: '#fff',
      fontFamily: 'Microsoft YaHei',
      fontWeight: 400,
      fontSize: 16,
      // fill: "#ffffff",
    },
    position: 'top', //显示位置
  })
  //显示圆点--折线上的圆点
  state.chart
    .point() //获得圆点对象
    .size(4) //圆点大小
    .style({
      // strokeOpacity:1,
      fill: '#2681ff', //圆点颜色
      stroke: '#fff', //圆点边框颜色
    })
    .state({
      // selected:{
      //   style:{
      //     stroke:'red',
      //   }
      // }
      active: {
        style: {
          fill: '#3681ff', //鼠标经过 圆点颜色
          stroke: '#ff00ff', //鼠标经过 圆点边框颜色
        },
      },
    })
    .position('label' + '*' + 'value')
    .color('#2681ff')
    .shape('circle')
}
//设置图例
function setChartLegend() {
  state.chart.legend(false) //设置为false，表示不显示图例

  // state.chart.legend('value', {
  //     position: 'bottom', //图例位置："top" | "top-left" | "top-right" | "right" | "right-top" | "right-bottom" | "left" | "left-top" | "left-bottom" | "bottom" | "bottom-left" | "bottom-right"
  //     itemName: {
  //         style: {
  //             fill: '#fff',
  //             fontFamily: 'Microsoft YaHei',
  //             fontWeight: 400,
  //             fontSize: 16,
  //         },
  //     },
  //     pageNavigator: {
  //         marker: {
  //             //分页器指示箭头配置项
  //             style: {
  //                 // 非激活，不可点击态时的填充色设置
  //                 inactiveFill: '#fff', //分页器：箭头颜色
  //                 inactiveOpacity: 1, //分页器：箭头透明度
  //                 // 默认填充色设置
  //                 fill: '#fff', //分页器：颜色
  //                 opacity: 1, //分页器：透明度
  //                 size: 12, //分页器：大小
  //             },
  //         },
  //         text: {
  //             //分页器指示文本配置项
  //             style: {
  //                 fill: '#fff', //分页器：文本颜色
  //                 fontSize: 12, //分页器：文本大小
  //             },
  //         },
  //     },
  // });
}
//设置动画
function setChartAnimate() {
  // state.chart.animate(false);//设置为false，表示不使用动画效果

  state.chart.animate({
    // 初始化时的入场动画
    appear: {
      animation: 'fade-in', // 动画名称:'fade-in'|'fan-in'|'scale-inx'|'scale-iny'|'path-in'|'zoom-in'|'clip-in'
      easing: 'easeQuadIn', // 动画缓动效果
      delay: 100, // 动画延迟执行时间
      duration: 600, // 动画执行时间
    },
    // 更新时的出现动画
    enter: {
      animation: 'fade-in', //动画名称:'fade-in'|'fan-in'|'scale-inx'|'scale-iny'|'path-in'|'zoom-in'|'clip-in'
      easing: 'easeQuadIn', // 动画缓动效果
      delay: 100, // 动画延迟执行时间
      duration: 600, // 动画执行时间
    },
    // 更新时的动画
    leave: {
      animation: 'path-out', //动画名称:'fade-out'|'path-out'|'zoom-out'|'lineWidth-out'
      easing: 'easeQuadIn', // 动画缓动效果
      delay: 100, // 动画延迟执行时间
      duration: 600, // 动画执行时间
    },
    // 更新时的变化动画
    update: {
      animation: 'fade-in', //动画名称:'fade-in'|'fan-in'
      easing: 'easeQuadIn', // 动画缓动效果
      delay: 100, // 动画延迟执行时间
      duration: 600, // 动画执行时间
    },
  })
}

// 初始化
function init() {
  createChart() //创建chart
  setChartData() //设置字段和数据

  setChartAxis() //设置坐标轴和度量
  setChartTooltip() //设置提示信息

  state.chart.interaction('element-active') //设置图表样式

  setChartStyle() //设置图表柱子相关属性
  // state.chart.legend(false);//设置为false，表示不显示图例
  setChartLegend() //设置图例
  setChartAnimate() //设置动画

  //渲染图表
  state.chart.render()
}

onMounted(() => {
  init()
})
</script>
