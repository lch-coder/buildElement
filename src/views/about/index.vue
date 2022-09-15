<template>
  <div m-4>
    <el-card header="关于" mb-2>
      <p>
        Build Element 是一个基于
        Vue3、Vite、Element-Plus、TypeScript、Pinia的中后台解决方案，它使用了最新的前端技术栈，并提炼了典型的业务模型，页面，包括二次封装组件、动态菜单、权限校验、粒子化权限控制等功能，可以快速搭建企业级中后台项目。
      </p>
    </el-card>
    <el-card header="项目信息" mb-2>
      <el-descriptions border>
        <el-descriptions-item label="版本">
          <el-tag>{{ pkgJson.version }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="打包时间">
          <el-tag>{{ pkgTime }}</el-tag>
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
    <el-card header="生产环境依赖" mb-2>
      <el-descriptions border>
        <el-descriptions-item v-for="item in pkgJson.dependencies" :key="item.name" :label="item.name">
          {{ item.version }}
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
    <el-card header="开发环境依赖" mb-2>
      <el-descriptions border>
        <el-descriptions-item v-for="item in pkgJson.devDependencies" :key="item.name" :label="item.name">
          {{ item.version }}
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import pkg from '../../../package.json'
const pkgJson = {
  name: pkg.name,
  version: pkg.version,
  dependencies: Object.entries(pkg.dependencies).map(item => {
    const [name, version] = item
    return {
      name,
      version,
    }
  }),
  devDependencies: Object.entries(pkg.devDependencies).map(item => {
    const [name, version] = item
    return {
      name,
      version,
    }
  }),
}
const pkgTime = __PKG_TIME__
</script>
