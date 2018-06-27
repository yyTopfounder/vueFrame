import Vuex from "vuex"
import Vue from "vue";

Vue.use(Vuex)
const isDev = process.env.NODE_ENV ==="development"

const store = new Vuex.Store({
  strict: isDev,
  state:{
    count: 0,
    testAry:[1,2,3,4,5,6]
  },
  mutations:{
    updateCount:state =>{
      state.count++;
    }
  },
  getters:{
    greater5:state =>{
      return state.testAry.filter(item => item>5).length
    }
  }
})

export default store;