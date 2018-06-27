<template>
   <div class="nav1Contrain">
      <div>nav1Page</div>
      <div>test store:{{count}}</div>
      <div v-for="item in testAry">{{item}}</div>
      <div>greater5:{{greater5}}</div>
      <button @click="addCount">addCount</button>
   </div>
</template>
<style lang="stylus">
    .nav1Contrain{
       font-size 18px
       &>div:nth-child(1){
         text-align center
       }
       button{
          width 80px;
          height 30px
          line-height 30px
          font-size 16px
       }
    }
</style>
<script>
    import {mapState,mapGetters} from "vuex"
    export default {
      computed:{
         ...mapState(["count","testAry"]),
         ...mapGetters(["greater5"])
      },
      methods:{
        addCount(){
          this.$store.commit("updateCount")
        }
      },
      mounted(){

      }
    }
</script>