
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import About from './components/about/About.vue'
import Admin from './components/Admin.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
// 二级路由
import History from './components/about/History'
import Delivery from './components/about/Delivery'
import Contact from './components/about/Contact'
import OrderGuide from './components/about/OrderGuide'
//三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'
export const routes = [
  { path: '/', name: "homeLink", components:{
    default:Home,
    'orderGuide' :OrderGuide,
    'delivery':Delivery,
    'history':History
  } },
  { path: '/menu', component: Menu },
  {
    path: '/admin', component: Admin,
    // beforeEnter: (to, from, next) => {
    //路由独享守卫
    // alert("非登陆状态，无法访问");
    // next(false);
    //判断store.gettes.isLogin ===false
    //     if (to.path == '/login' || to.path == '/register') {
    //       next();
    //     } else {
    //       alert("还没有登录，请先登录！");
    //       next('/login');

    //     }
    // }
  },
  {
    path: '/about', redirect: '/about/contact', component: About, children: [
      {
        path: '/about/contact', redirect: '/personname', name: "contactLink", component: Contact, children: [
          { path: '/phone', name: "phoneNumber", component: Phone },
          { path: '/personname', name: "personName", component: PersonName }
        ]
      },
      { path: '/about/delivery', name: "deliveryLink", component: Delivery },
      { path: '/about/history', name: "historyLink", component: History },
      { path: '/about/orderguide', name: "orderGuideLink", component: OrderGuide }
    ]
  },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '*', redirect: '/' },

]