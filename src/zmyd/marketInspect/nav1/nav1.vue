<template>
   <div class="nav1Contrain">
      <div>nav1Page</div>
      <div>test store:{{count}}</div>
   </div>
</template>
<style lang="stylus">
    .nav1Contrain{
       font-size 18px
       &>div:nth-child(1){
         text-align center
       }
    }
</style>
<script>
    export default {
      data(){
        return{
          count:this.$store.state.count
        }
      },
      mounted(){
        this.$store.updateCount(this.$store.state,5)
      }
    }
</script>