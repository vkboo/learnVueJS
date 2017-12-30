<template>
  <div>
      <h2>用户模块</h2>
      <span>当前用户id: {{$route.params.id}}</span>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'user'
}
</script>

<style scoped>
h2 {
    color: red;
}
</style>


