import Vue from 'vue'
import VueRouter from "vue-router"

import Reg from "@/components/Reg"
import Log from "@/components/Log"
import User from '@/components/User'
import UserProfile from '@/components/UserProfile'
import UserIndex from '@/components/UserIndex'
import Index from '@/components/Index'
import Pubg from '@/components/Pubg'
import News from '@/components/News'

import z from '@/tools/z'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: Index,
        'pubg': Pubg
      }
    },
    {
      path: "/login/:grade",
      component: Log
    },
    {
      path: "/register",
      component: Reg,
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/user/:id',
      component: User,
      children: [{
        path: '',
        component: UserIndex
      }, {
        path: 'profile',
        component: UserProfile
      }]
    },
    {
      path: '/news/:_id',
      component: News,
      props: true
    }
  ]
})

router.beforeEach((to,from,next) => {
  z.log(to.matched.some((meta) => meta.meta.requiresAuth))
  // z.log(from)
  // z.log(next)
  next()
})

export { router }
