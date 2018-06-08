import Vue from "vue"
import App from "./app.vue"

import "./assets/styles/test.css"
import "./assets/img/1.png"
import "./assets/styles/test.stylus.styl"

const root = document.createElement("div");
document.body.appendChild(root);

new Vue({
  render: (h) => h(App)
}).$mount(root);
