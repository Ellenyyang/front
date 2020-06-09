import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Intro from '@/components/Intro'
import List from '@/components/List'
import Update from '@/components/Update'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }

    {
      path: '/',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/update',
      name: 'Update',
      component: Update
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
    
  ]
})
