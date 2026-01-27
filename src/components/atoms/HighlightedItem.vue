<script setup lang="ts">

</script>

<template>
  <span>
    <p><slot></slot></p>
  </span>
</template>
<style lang="scss" scoped>
    span{
        background-color: gray;
        padding: .1rem .6rem;
        border-radius: .5rem;
        p{
            margin: 0;
            padding: 0;
            font-size: small;
            color: white;
            font-weight: 500;
            
        }
        
    }
</style>