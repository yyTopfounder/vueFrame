<template>
    <div id="sideNavContrain">
        <div class="navContrain">
                <div class="navItem" v-for="navItem in navAry">
                    <router-link :to="navItem.url" >{{navItem.name}}</router-link>
                </div>
        </div>
        <div class="contentContrain">
            <router-view ></router-view>
        </div>
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
            flex-grow 1
        }
    }
</style>
<script>
    export default {
      data(){
        return {
          navAry:[
            {url:"/nav1", name: "nav1"},
            {url:"/nav2", name: "nav2"},
            {url:"/nav3", name: "nav3"}
          ]
        }
      }
    }
</script>