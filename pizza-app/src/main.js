import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'


Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})
//全局守卫
//判断store.gettes.isLogin ===false
// router.beforeEach((to,from,next)=>{
//   // alert("还没有登录，请先登录！");
//   // next()
//   console.log(to);
//   if(to.path=='/login'|| to.path=='/register'){
//     next();
//   }else{
//     alert("还没有登录，请先登录！");
//     next('/login');

//   }
// }
// )
//后置钩子
// router.afterEach((to,from)=>{
//   alert("after each");

// })
//路由独享守卫

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
