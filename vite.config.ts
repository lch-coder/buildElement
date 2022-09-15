import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
import Unocss from 'unocss/vite'
import { viteMockServe } from 'vite-plugin-mock'
import dayjs from 'dayjs'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/theme.scss" as *;`,
      },
    },
  },
  define: {
    __PKG_TIME__: JSON.stringify(dayjs().format('YYYY-MM-DD HH:mm:ss')),
  },
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
      dts: './src/auto-imports.d.ts',
      eslintrc: {
        enabled: false, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dirs: ['src/components'],
      resolvers: [ElementPlusResolver()],
      dts: 'src/components.d.ts',
      include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/, /\.md$/],
    }),
    Unocss(),
    viteMockServe({
      supportTs: false,
      logger: false,
      mockPath: './src/mock',
      localEnabled: true, // 开发打包开关
      prodEnabled: true, // 生产打包开关 // 这样可以控制关闭mock的时候不让mock打包到最终代码内
      injectCode: ` import { setupProdMockServer } from './mockProdServer'; setupProdMockServer(); `,
    }),
  ],
  server: {
    host: '0.0.0.0',
    open: true,
    port: 4646,
  },
})
