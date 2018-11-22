import Vue from 'vue'
import Router from 'vue-router'
import Partitioner from '@/components/Partitioner'
import Matchmaking from '@/components/Matchmaking'
import GroupManager from '@/components/GroupManager'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Partitioner',
      component: Partitioner,
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
