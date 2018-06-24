import Vuex from "vuex"
import Vue from "vue";

Vue.use(Vuex)
const isDev = process.env.NODE_ENV ==="development"

const store = new Vuex.Store({
  strict: isDev,
  state:{
    count: 0
  },
  mutations:{
    updateCount:(state,num) =>{
      state.count = num;
    }
  }
})

export default store;