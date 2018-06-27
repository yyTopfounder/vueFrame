<template>
    <div>
        <slot v-bind:scopeTest="scopeTest"></slot>
    </div>
</template>
<script>
    export default {
        data(){
          return{
            scopeTest:"slotTestComponent scope"
          }
        }
    }
</script>