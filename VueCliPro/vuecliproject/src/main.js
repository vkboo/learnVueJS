import Vue from 'vue'
import App from './App.vue'
import Mock from 'mockjs'
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios'

new Vue({
  el: '#app',
  render: h => h(App)
})




var data = Mock.mock('zhaobo.api',{
  name: {
      first: '@FIRST',
      middle: '@FIRST',
      last: '@LAST',
      full: '@first @middle @last'
  }
})

// console.log(data)

axios.get('zhaobo.api')
  .then(function(res) {
    console.log(res)
  })
