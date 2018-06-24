<template>
    <div id="sideNavContrain">
        <div class="navContrain">
            <div class="navItem" v-for="navItem in navAry">{{navItem}}</div>
        </div>
        <div class="contentContrain"></div>
    </div>
</template>
<style lang="stylus">
    #sideNavContrain{
        display flex
        justify-content space-between
        height 100%
        .navContrain{
            width 60px
            border 1px solid #ccc
            height 100%
            div.navItem{
                height 50px
                line-height 50px;
                text-align center
                border-bottom 1px solid #ccc
            }
        }
        .contentContrain{
            height 100%
        }
    }
</style>
<script>
    export default {
      data(){
        return {
          navAry:["nav1","nav1","nav1","nav1","nav1","nav1"]
        }
      }
    }
</script>