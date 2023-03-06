import type { Plugin, ResolvedConfig } from 'vite'

export default function fullImportPlugin(mode: string) {
  let config: ResolvedConfig
  return <Plugin>{
    name: 'fullImportElementPlus',
    async configResolved(conf) {
      config = conf
    },
    transform(code, id) {
      // 判断当前处理的是否是src/main.ts
      if (mode === 'development' && /src\/main.ts$/.test(id)) {
        const name = 'ElementPlus'
        // 引入ElementPlus和样式
        const prepend = `import ${name} from 'element-plus';\nimport 'element-plus/dist/index.css';\n`
        // 通过匹配字符串来使用 ElementPlus （此处替换规则根据 main.ts 的情况而定）
        // 相当于将字符串 `app.use(router).mount('#app')` 替换成 `app.use(router).use(ElementPlus).mount('#app')`
        code = code.replace('async function setupApp() {', $1 => prepend + $1)
        code = code.replace('app.mount(', $1 => `app.use(${name})\n  ` + $1)
        return code
      }
      return code
    },
  }
}
