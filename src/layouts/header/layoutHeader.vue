<script lang="ts" setup>
import { useUserStore, useAppStore } from '@/store'
const userStore = useUserStore()
const router = useRouter()

const isDark = useDark()
const toggleDark = useToggle(isDark)

const { isFullscreen, toggle } = useFullscreen()

const appStore = useAppStore()

function onClickLogo() {
  if (appStore.isDrawer) {
    appStore.siderCollapse = false
  }
}

function onLogout() {
  userStore.logout()
  router.push({
    path: '/login',
  })
}
</script>

<template>
  <el-header class="layout-header" height="48px" bg-bg-color transition-all duration-300 ease-in-out>
    <div class="logo" @click="onClickLogo">
      <el-icon :size="22">
        <i i-custom-element color-primary></i>
      </el-icon>
      <template v-if="!appStore.isDrawer">
        <span class="text-2xl ml-2" whitespace-nowrap color-primary>Build Element</span>
      </template>
    </div>
    <div flex-1 />
    <el-space :size="0">
      <hover-container content="全屏">
        <div class="right-item" @click="toggle">
          <i v-if="isFullscreen" i-gridicons-fullscreen-exit></i>
          <i v-else i-gridicons-fullscreen></i>
        </div>
      </hover-container>
      <hoverContainer content="主题模式">
        <div class="right-item" @click="toggleDark()">
          <i v-if="isDark" i-ep-moon />
          <i v-else i-ep-sunny />
        </div>
      </hoverContainer>

      <hoverContainer content="消息通知">
        <div class="right-item">
          <el-badge :value="12">
            <i i-ep-bell-filled />
          </el-badge>
        </div>
      </hoverContainer>

      <div class="right-item">
        <el-dropdown>
          <div class="el-dropdown-link">
            <el-avatar :size="30" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
            <div class="nickname">
              admin
              <i i-ep-arrow-down ml-1 />
            </div>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item> 个人设置 </el-dropdown-item>
              <el-dropdown-item> 个人中心 </el-dropdown-item>
              <el-dropdown-item divided @click="onLogout"> 退出登录 </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-space>
  </el-header>
</template>

<style lang="scss" scoped>
.layout-header {
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 1001;
  box-shadow: var(--el-box-shadow-lighter);
}
.logo {
  position: relative;
  display: flex;
  align-items: center;
  transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  img {
    display: inline-block;
    height: 32px;
    vertical-align: middle;
  }
}

.right-item {
  cursor: pointer;
  padding: 0 12px;
  height: 48px;
  display: flex;
  align-items: center;
  &:deep {
    .el-badge__content {
      border: none;
    }
  }

  .notification {
    display: block;
  }

  .el-dropdown-link {
    display: flex;
    align-items: center;
  }

  .nickname {
    // color: #fff;
    margin-left: 8px;
    display: flex;
    align-items: center;
  }
}
</style>
