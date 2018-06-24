import Vue from "vue"
import homePage from "./zmyd/homePage/homePage.vue"
import marketInspect from "./zmyd/marketInspect/marketInspect.vue"
import VueRouter from "vue-router"
import MintUI from 'mint-ui'
import store from "./store/store"

import "./assets/styles/global.styl"
import 'mint-ui/lib/style.css'


const routes = [
  {path: "/",redirect:"/home"},
  {path: "/home",component: homePage},
  {path: "/marketInspect",component: marketInspect}
];
const router = new VueRouter({routes});

Vue.use(VueRouter);
Vue.use(MintUI);
new Vue({
  router,
  store
}).$mount('#zmyd');
