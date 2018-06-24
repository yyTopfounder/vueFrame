<template>
    <div class="marketInspectContrain">
        <mt-header title="首页">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <side-nav></side-nav>
    </div>
</template>
<script>
    import sideNav from "../common/sideNav.vue"
    import { Header } from 'mint-ui';
    export default {
      components:{
        sideNav,
        Header
      }
    }
</script>
<style>
    .marketInspectContrain{
        width: 100%;
        height: 100%;
    }
</style>