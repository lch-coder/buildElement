import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/getUserMenu', // 注意，这里只能是string格式
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        data: [
          {
            title: '仪表盘',
            icon: 'i-ep-odometer',
            name: 'dashboard',
            path: '/dashboard',
            children: [
              {
                title: '工作台',
                icon: 'i-icon-park-outline-workbench',
                name: 'workplace',
                path: '/dashboard/workplace',
                component: 'dashboard/workplace.vue',
              },
              {
                title: '监控页',
                icon: 'i-icon-park-twotone-monitor-camera',
                name: 'monitor',
                path: '/dashboard/monitor',
                component: 'dashboard/monitor.vue',
              },
            ],
          },
          {
            title: '表单页',
            icon: 'i-ep-edit',
            path: '/form',
            children: [
              {
                title: '基础表单',
                icon: '',
                name: 'basic-form',
                path: '/form/basic-form',
                component: 'form/basic-form.vue',
              },
              {
                title: '分步表单',
                icon: '',
                name: 'step-form',
                path: '/form/step-form',
                component: 'form/advanced-form.vue',
              },
              {
                title: '高级表单',
                icon: '',
                name: 'advanced-form',
                path: '/form/advanced-form',
                component: 'form/step-form.vue',
              },
            ],
          },
          {
            title: '表格',
            icon: 'i-tabler-table',
            path: '/table',
            children: [
              {
                title: '基础表格',
                icon: 'i-tabler-table-alias',
                name: 'basicTable',
                path: '/table/basicTable',
                component: 'table/basicTable.vue',
              },
              {
                title: '多级表格',
                icon: 'i-tabler-table-export',
                name: 'multiTable',
                path: '/table/multiTable',
                component: 'table/multiTable.vue',
              },
            ],
          },
          {
            title: '结果页',
            icon: 'i-ep-reading',
            path: '/result',
            children: [
              {
                title: '成功页',
                icon: 'i-ep-success-filled',
                name: 'success',
                path: '/result/success',
                component: 'result/success.vue',
              },
              {
                title: '失败页',
                icon: 'i-ep-failed',
                name: 'fail',
                path: '/result/fail',
                component: 'result/fail.vue',
              },
            ],
          },
          {
            title: '异常页',
            icon: 'i-ep-data-board',
            path: '/exception',
            children: [
              {
                title: '403',
                icon: '',
                name: '403',
                path: '/exception/403',
                component: 'exception/403.vue',
              },
              {
                title: '404',
                icon: '',
                name: '404',
                path: '/exception/404',
                component: 'exception/404.vue',
              },
              {
                title: '500',
                icon: '',
                name: '500',
                path: '/exception/500',
                component: 'exception/500.vue',
              },
            ],
          },
          {
            title: '图标集',
            icon: 'i-ep-brush',
            path: '/icons',
            children: [
              {
                title: 'Element Plus',
                icon: 'i-ep-element-plus',
                name: 'element-plus',
                path: '/icons/element-plus',
                component: 'icons/element-plus.vue',
              },
              {
                title: '更多图标',
                icon: 'i-ep-more-filled',
                name: 'more',
                path: 'https://icones.netlify.app/',
                component: 'dashboard/workplace.vue',
              },
            ],
          },
          {
            title: '多级菜单',
            icon: 'i-ep-menu',
            path: '/mult-menu',
            children: [
              {
                title: '一级菜单',
                name: 'mult-first',
                icon: 'i-ep-menu',
                path: '/mult-menu/first',
                children: [
                  {
                    title: '二级菜单',
                    name: 'mult-first-second1',
                    icon: 'i-ep-menu',
                    path: '/mult-menu/first/second1',
                    component: 'multiMenu/first/second/index.vue',
                  },
                  {
                    title: '二级菜单(有子页面)',
                    name: 'mult-first-second2',
                    icon: 'i-ep-menu',
                    path: '/mult-menu/first/second2',
                    children: [
                      {
                        title: '三级菜单',
                        name: 'mult-first-second-third',
                        icon: 'i-ep-menu',
                        path: '/mult-menu/first/second/third',
                        component: 'multiMenu/first/second-new/third/index.vue',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            title: '功能',
            icon: 'i-ri-function-line',
            path: '/function',
            children: [
              {
                title: 'tab',
                icon: 'i-material-symbols-tab-outline',
                name: 'Tab',
                path: '/function/tab',
                cache: true,
                component: 'function/tab/index.vue',
              },
              {
                title: 'tab-detail',
                icon: '',
                name: 'Tab Detail',
                path: '/function/tab-detail',
                hidden: true,
                component: 'function/tab-detail/index.vue',
              },
              {
                title: 'tab-multi-detail',
                icon: '',
                name: 'Tab Multi Detail',
                path: '/function/tab-multi-detail',
                hidden: true,
                component: 'function/tab-multi-detail/index.vue',
              },
              {
                title: '主题设置',
                icon: '',
                name: 'setTheme',
                path: '/function/setTheme',
                component: 'function/setTheme/index.vue',
              },
            ],
          },
          {
            title: '错误页面',
            icon: 'i-ep-flag',
            name: 'permission',
            path: '/permission',
            component: '',
          },
          {
            title: '关于',
            icon: 'i-material-symbols-bookmarks-outline',
            name: 'about',
            path: '/about',
            component: 'about/index.vue',
          },
        ],
      }
    },
  },
] as MockMethod[] // 这里其实就是定义数据格式的，不了解的同学可以参考typescript的官方文档
