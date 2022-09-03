<script lang="ts" setup>
import axios from 'axios'
import { useUserStore } from '@/store/modules/user'
import { useMenuStore } from '@/store/modules/menu'
import { addRoutes } from '@/router/route'
const userStore = useUserStore()
const menuStore = useMenuStore()
const router = useRouter()
const route = useRoute()

const form = reactive({
  username: 'admin',
  password: '123456',
})

const rules = {
  username: { required: true, message: '请输入用户名' },
  password: { required: true, message: '请输入密码' },
}

const onLogin = async () => {
  let { data } = await axios.get('/api/user/login')
  userStore.setUserInfo(data.data)
  await addRoutes()
  router.push({
    path: menuStore.permissionMenu,
  })
}
</script>

<template>
  <div class="login">
    <div my-4 text-right>
      <el-button type="text"> </el-button>
    </div>
    <div text-center pt-100px>
      <div>
        <span font-600 text-4xl class="color-p">BulidAdmin</span>
      </div>
      <div text-sm mt-sm mb-4xl class="color-s">基于 Vue3 + Ts + Element Plus 的后台管理系统</div>
    </div>
    <div w328px ma>
      <el-form ref="form$" :model="form" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名" prefix-icon="i-ep-user" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" placeholder="请输入密码" type="password" prefix-icon="i-ep-lock" />
        </el-form-item>
        <el-form-item>
          <el-checkbox label="自动登录" />
          <el-link ml-a type="primary" :underline="false"> 忘记密码? </el-link>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%" @click="onLogin"> 登录 </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  height: 100vh;
  overflow: auto;
  background-color: var(--el-bg-color-page);
  background-image: url(@/assets/login-bg.svg);
}
</style>
