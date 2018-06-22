import Vue from "vue"
import homePage from "./zmyd/homePage/homePage.vue"
import VueRouter from "vue-router"
/*import XHeader from "vux"*/

import "./assets/styles/global.styl"

const routes = [
  {path: "/",redirect:"/home"},
  {path: "/home",component: homePage}
];
const router = new VueRouter({routes});

Vue.use(VueRouter);
new Vue({
  router
  /*components:{
    XHeader
  }*/
}).$mount('#zmyd');
