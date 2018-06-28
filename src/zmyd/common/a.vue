<template>
    <div>
        I am a component
        <b-component></b-component>
    </div>
</template>
<script>
    /*import bComponent from "./b.vue"*/
    export default {
      beforeCreate: function () {
        console.log(require('./b.vue').default);
        this.$options.components.bComponent = require('./b.vue').default
      }
    }
</script>