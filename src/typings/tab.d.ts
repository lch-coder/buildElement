/** 多页签Tab */
interface Tab {
  // 标题
  title: string
  // 跳转路径
  fullPath: string
  // 图标
  icon: string
  // 授权标识(即路由name,不可重复)
  name: string
}

// Omit 删除指定类型的key返回删除后的接口类型
interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  path: string
  name: string
  meta: RouteMeta
  component?: Component | string
  children?: AppRouteRecordRaw[]
}
