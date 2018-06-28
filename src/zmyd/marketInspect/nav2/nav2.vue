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
        <div>异步组件测试</div>
        <async-component></async-component>
        <div>组件循环测试</div>
        <a-component></a-component>
    </div>
</template>
<style lang="stylus">
    .nav2PageContrain{
        font-size 18px
    }
</style>
<script>
    import slotTest from "../../common/slotTest.vue"
    import aComponent from "../../common/a.vue"
    export default {
        data(){
          return{
            scopeTestNav:"nav2 scope"
          }
        },
        components:{
          slotTest,
          aComponent
        }
    }
</script>