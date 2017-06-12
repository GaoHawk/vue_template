import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Login from '@/components/Login'
// import Foo from '@/components/foo'
// import Bar from '@/components/bar'
// import Notice from '@/components/notice'
// import homework from '@/components/homework'
// import c_notice from '@/components/createNotice'
// import firstTab from '@/components/tabbar'
// import pictureView from '@/components/picture'
// import pageNav from '@/components/pageNav'
// import yearIndex from '@/components/yearIndex'
// import comments from '@/components/comments'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Login',
      component:Login
    }
  ]
})
