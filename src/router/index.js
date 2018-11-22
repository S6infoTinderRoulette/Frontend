import Vue from 'vue'
import Router from 'vue-router'
import Partitioner from '@/components/Partitioner'
import Matchmaking from '@/components/Matchmaking'
import GroupManager from '@/components/GroupManager'
import store from '../store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Partitioner',
      component: Partitioner
    },
    {
      path: '/matchmaking',
      name: 'Matchmaking',
      component: Matchmaking
    },
    {
      path: '/groupmanager',
      name: 'GroupManager',
      component: GroupManager
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (store.state.selfStatus === 1) {
    if (to.path.includes('matchmaking')) {
      next()
    } else {
      next(false)
    }
  } else {
    if (to.path.includes('matchmaking')) {
      next(false)
    } else {
      next()
    }
  }
})

export default router