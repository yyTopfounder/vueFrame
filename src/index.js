import Vue from "vue"
import homePage from "./zmyd/homePage/homePage.vue"
import marketInspect from "./zmyd/marketInspect/marketInspect.vue"
import VueRouter from "vue-router"
import MintUI from 'mint-ui'
import store from "./store/store"
import nav1 from './zmyd/marketInspect/nav1/nav1.vue'
import nav2 from "./zmyd/marketInspect/nav2/nav2.vue"
import nav3 from "./zmyd/marketInspect/nav3/nav3.vue"

import "./assets/styles/global.styl"
import 'mint-ui/lib/style.css'


const routes = [
  {path: "/", redirect:"/home"},
  {path: "/home", component: homePage},
  {
    path: "/marketInspect",
    component: marketInspect,
    children: [
      {path: "/", redirect: "/nav1"},
      {path: "/nav1", component: nav1},
      {path: "/nav2", component: nav2},
      {path: "/nav3", component: nav3}
    ]
  }
];
const router = new VueRouter({
  routes,
  mode: 'history',
});

Vue.use(VueRouter);
Vue.use(MintUI);
Vue.component("async-component",(resolve,reject)=>{
  setTimeout(()=>{
    resolve({
      template:"<div>I am a async-component</div>"
    })
  },3000)
});
new Vue({
  router,
  store
}).$mount('#zmyd');
