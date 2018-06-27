<template>
    <div class="nav2PageContrain">
        nav2Page
        <div>插槽作用域:</div>
        <slot-test>
            <template slot-scope="slotProps">
                <div>nav2:{{scopeTestNav}}</div>
                <div>slot:{{slotProps.scopeTest}}</div>
            </template>
        </slot-test>
    </div>
</template>
<style lang="stylus">
    .nav2PageContrain{
        font-size 18px
    }
</style>
<script>
    import slotTest from "../../common/slotTest.vue"
    export default {
        data(){
          return{
            scopeTestNav:"nav2 scope"
          }
        },
        components:{
          slotTest
        }
    }
</script>