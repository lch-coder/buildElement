import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/user/login', // 注意，这里只能是string格式
    method: 'get',
    timeout: 1000,
    response: () => {
      return {
        code: 200,
        message: 'ok',
        data: {
          username: 'admin',
          nickname: 'Admin',
          token: 'admin-token',
          avatar: 'https://iph.href.lu/100x100?text=MD&fg=FFFFFF&bg=000000',
          menuList: [
            {
              title: '仪表盘',
              icon: 'i-ep-odometer',
              name: 'dashboard',
              path: '/dashboard',
              children: [
                {
                  title: '工作台',
                  icon: '',
                  name: 'workplace',
                  path: '/dashboard/workplace',
                  component: 'dashboard/workplace.vue',
                },
                {
                  title: '监控页',
                  icon: '',
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
              title: '结果页',
              icon: 'i-ep-reading',
              path: '/result',
              children: [
                {
                  title: '成功页',
                  icon: '',
                  name: 'success',
                  path: '/result/success',
                  component: 'result/success.vue',
                },
                {
                  title: '失败页',
                  icon: '',
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
                  icon: '',
                  name: 'element-plus',
                  path: '/icons/element-plus',
                  component: 'icons/element-plus.vue',
                },
                {
                  title: '更多图标',
                  icon: '',
                  name: 'more',
                  path: 'https://icones.netlify.app/',
                  component: 'dashboard/workplace.vue',
                },
              ],
            },
            {
              title: '权限演示',
              icon: 'i-ep-flag',
              name: 'permission',
              path: '/permission',
              component: 'dashboard/workplace.vue',
            },
          ],
        },
      }
    },
  },
] as MockMethod[] // 这里其实就是定义数据格式的，不了解的同学可以参考typescript的官方文档
