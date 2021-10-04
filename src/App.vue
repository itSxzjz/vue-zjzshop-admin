<template>
  <div id="app">
    <!-- 这里路由专门显示一级路由的，不是登录页就是主页面（layout组件） -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
