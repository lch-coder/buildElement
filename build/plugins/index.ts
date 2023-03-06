import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { visualizer } from 'rollup-plugin-visualizer'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'
import { viteMockServe } from 'vite-plugin-mock'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import eslintPlugin from 'vite-plugin-eslint'
import { webUpdateNotice } from '@plugin-web-update-notification/vite'
import fullImportPlugin from './fullImportPlugin'

/**
 * vite插件列表
 * @param mode
 */
export function setupVitePlugins(mode: string, BASE_URL: string) {
  const plugins = [
    vue(),
    vueJsx(),
    visualizer({
      // open: true, //注意这里要设置为true，否则无效
      gzipSize: true,
      brotliSize: true,
    }),
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
    fullImportPlugin(mode),
    Components({
      dirs: ['src/components'],
      resolvers: mode !== 'development' ? ElementPlusResolver() : undefined,
      dts: 'src/components.d.ts',
      include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/, /\.md$/],
    }),
    // ElementPlus(),
    Unocss(),
    viteMockServe({
      supportTs: false,
      logger: false,
      mockPath: './src/mock',
      localEnabled: true, // 开发打包开关
      prodEnabled: true, // 生产打包开关 // 这样可以控制关闭mock的时候不让mock打包到最终代码内
      injectCode: ` import { setupProdMockServer } from './mockProdServer'; setupProdMockServer(); `,
    }),
    vueSetupExtend(),
    eslintPlugin(),
    webUpdateNotice({ logVersion: true, injectFileBase: BASE_URL }),
  ]
  return plugins
}
