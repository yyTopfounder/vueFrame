import Vue from "vue"
import homePage from "./zmyd/homePage/homePage.vue"
import VueRouter from "vue-router"
import MintUI from 'mint-ui'

import "./assets/styles/global.styl"
import 'mint-ui/lib/style.css'

const routes = [
  {path: "/",redirect:"/home"},
  {path: "/home",component: homePage}
];
const router = new VueRouter({routes});

Vue.use(VueRouter);
Vue.use(MintUI);
new Vue({
  router,
  /*components:{
    XHeader
  }*/
}).$mount('#zmyd');
