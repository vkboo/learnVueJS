<template>
  <div>
      <h2>登录模块</h2>
      <div>{{msg}}</div>
  </div>
</template>

<script>
export default {
    name: 'login',
    data: function() {
        return {
            msg: ''
        }
    },
    mounted: function() {
        let path = this.$route.params.grade
        if (path === 'vip') {
            this.msg = '当前是VIP用户'
        } else if (path === 'normal') {
            this.msg = '当前是普通用户'
        } else {
            this.msg = '404 Not Found'
        }
    }
};
</script>

<style>

</style>
