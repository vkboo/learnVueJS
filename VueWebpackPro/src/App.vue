<template>
  <div id="app">
    <h3>路由基础</h3>
    <router-link :to="{path: '/login/vip' }">登录</router-link>
    <router-link to="/register">注册</router-link>
    <div class="router-view">
      <transition>
        <router-view></router-view>
      </transition>
      <router-view name="pubg"></router-view>
      <router-view name="news"></router-view>
    </div>

    <button @click="pushRoute">push路由按钮</button>

  </div>
</template>

<script>
import { router } from "@/router";

export default {
  name: "app",
  methods: {
    pushRoute: function() {
      router.push("/register");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-view {
  border: 2px solid blue;
}
</style>
