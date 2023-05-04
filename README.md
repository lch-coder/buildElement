[在线 Demo](https://lch-coder.github.io/buildElement/login)

## 特性

- ⚡️ Vue3、vite4、pnpm 快速搭建项目
- 🗂 动态路由
- 📦 组件自动化加载
- 🍍 使用 Pinia 的状态管理
- 📑 布局系统
- 🎨 UnoCSS - 高性能且极具灵活性的即时原子化 CSS 引擎
- 😃 支持多种图标
- 🔥 使用 新的<script setup>语法
- 🤙🏻 多种有趣的功能
- 📥 API 自动加载 - 直接使用 Composition API 无需引入
- 🦾 TypeScript

## 预配置

### UI 框架

- Element Plus - Vue3 UI 组件库
- UnoCSS - 高性能且极具灵活性的即时原子化 CSS 引擎

### Icons

- Iconify - 使用任意的图标集
- UnoCSS 的纯 CSS 图标方案

### 插件

- Vue Router
- Pinia - 直接的, 类型安全的, 使用 Composition api 的轻便灵活的 Vue 状态管理
- unplugin-vue-components - 自动加载组件
- unplugin-auto-import - 直接使用 Composition API 等，无需导入
- VueUse - 实用的 Composition API 工具合集

### 编码风格

- 使用 Composition API 的 <script setup>SFC 语法
- ESLint、Prettier

### 开发工具

- TypeScript
- pnpm - 快, 节省磁盘空间的包管理器
- VS Code 扩展
  - Vite - 自动启动 Vite 服务器
  - Volar - Vue 3 <script setup> IDE 支持
  - ESLint
  - Prettier
  - UnoCSS

## 使用

### 安装依赖

pnpm install

### 开发

pnpm dev

### 构建

pnpm build

## 系统功能

### 多级菜单

![image.png](https://cdn.nlark.com/yuque/0/2023/png/28881333/1683187385805-e6137b8d-a3b4-4018-bc58-7baf53de5816.png#averageHue=%23e3ba7b&clientId=u0d5a8c77-a95d-4&from=paste&height=967&id=u51cb39fd&originHeight=967&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=43660&status=done&style=none&taskId=u2ac5ab23-d2b6-475f-9b53-f7f736028da&title=&width=1920)

### 拖拽布局

> 使用 vue-grid-layout、echarts 搭建数据看板

![image.png](https://cdn.nlark.com/yuque/0/2023/png/28881333/1683187422968-0484a5b9-4e63-41bc-b345-c976f2cbb749.png#averageHue=%23fdfaf9&clientId=u0d5a8c77-a95d-4&from=paste&height=969&id=u1a3829ad&originHeight=969&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=107199&status=done&style=none&taskId=u95e8f680-a5aa-4f96-807a-8a41abcc42c&title=&width=1920)

### 分割面板

> 使用 splitpanes 的例子

![image.png](https://cdn.nlark.com/yuque/0/2023/png/28881333/1683187563012-f11bcf0e-0327-4a7a-b5bc-8864cffcc61b.png#averageHue=%23f4f4f4&clientId=u0d5a8c77-a95d-4&from=paste&height=967&id=u1d1607b7&originHeight=967&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=42069&status=done&style=none&taskId=ue412aa31-40c4-491c-be20-bb90cca3a8f&title=&width=1920)

### 可插入 dom 节点的文本框

> 基于 codemirror6 开发的文本框，支持插入 dom 节点

![image.png](https://cdn.nlark.com/yuque/0/2023/png/28881333/1683187714788-7c553f7c-32b8-4b9c-8be2-91c8cef90845.png#averageHue=%23fefefe&clientId=u0d5a8c77-a95d-4&from=paste&height=967&id=u0c8e1769&originHeight=967&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=67950&status=done&style=none&taskId=u5cf222fe-250b-49fc-bd94-4e9e97d1c84&title=&width=1920)

### 页面缓存

![image.png](https://cdn.nlark.com/yuque/0/2023/png/28881333/1683191186560-432c3bc1-6650-4ee7-8e13-b6688d764d8e.png#averageHue=%23fefefe&clientId=u0d5a8c77-a95d-4&from=paste&height=969&id=u4fb30705&originHeight=969&originWidth=1917&originalType=binary&ratio=1&rotation=0&showTitle=false&size=54875&status=done&style=none&taskId=u1e1e1aba-f0b6-4c51-b82b-fd17fc6fad4&title=&width=1917)

### 动态路由

> 根据登录用户的菜单，生成路由数据，动态添加。

### 404 页面

> 页面不存在，跳到 404 页面

![image.png](https://cdn.nlark.com/yuque/0/2023/png/28881333/1683191302102-601785c6-1f80-466e-b760-50bd3ab9ce1e.png#averageHue=%23fefefe&clientId=u0d5a8c77-a95d-4&from=paste&height=969&id=uca8a3991&originHeight=969&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=47041&status=done&style=none&taskId=u5caa0338-8811-4ef0-8be5-4ddcbb4e69b&title=&width=1920)
表格封装

> 二次封装 el-table，支持插槽、动态多级表头导出等。

![image.png](https://cdn.nlark.com/yuque/0/2023/png/28881333/1683191370596-8bc5a5fe-5803-41fe-9851-fc5ea524f8b1.png#averageHue=%23fefefe&clientId=u0d5a8c77-a95d-4&from=paste&height=969&id=u8f8bb92c&originHeight=969&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=73291&status=done&style=none&taskId=ub59ea08c-fbb1-4e73-af08-762e70b8297&title=&width=1920)

### 图标集

![image.png](https://cdn.nlark.com/yuque/0/2023/png/28881333/1683191442583-b13de906-b5ae-434b-a43e-2f7d626f7486.png#averageHue=%23fefefd&clientId=u0d5a8c77-a95d-4&from=paste&height=969&id=ue9954558&originHeight=969&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=108477&status=done&style=none&taskId=u6ace4f2b-5f9b-4f37-a36f-36a8a5d759b&title=&width=1920)
