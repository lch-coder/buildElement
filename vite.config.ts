import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import postcssPresetEnv from 'postcss-preset-env'
import { viteDefine, setupVitePlugins } from './build'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const { VITE_APP_BASE_URL: BASE_URL = '/' } = env
  return defineConfig({
    base: BASE_URL,
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    build: {
      target: 'es2015',
      minify: 'terser',
      terserOptions: {
        compress: {
          keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
          drop_console: true, // 生产环境去除 console
          drop_debugger: true, // 生产环境去除 debugger
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/theme.scss" as *;`,
        },
      },
      postcss: {
        plugins: [postcssPresetEnv()],
      },
    },
    define: viteDefine,
    plugins: setupVitePlugins(mode, BASE_URL),
    server: {
      host: '0.0.0.0',
      open: true,
      port: 4646,
    },
  })
}
