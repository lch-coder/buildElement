import { App } from 'vue'
import ECharts from 'vue-echarts'
import { use } from 'echarts/core'

import { CanvasRenderer, SVGRenderer } from 'echarts/renderers'
import { BarChart, PieChart, LineChart, FunnelChart, ScatterChart, TreemapChart, RadarChart } from 'echarts/charts'
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  DataZoomComponent,
  ToolboxComponent,
} from 'echarts/components'

use([
  SVGRenderer,
  BarChart,
  PieChart,
  LineChart,
  FunnelChart,
  ScatterChart,
  TreemapChart,
  RadarChart,
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
  ToolboxComponent,
])

export function setupEcharts(app: App) {
  app.component('VChart', ECharts)
}
