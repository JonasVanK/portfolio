<script setup lang="ts">
    const baseUrl = import.meta.env.BASE_URL
</script>

<template>
    <a href="`${baseUrl}files/cv_Jonas_Van_Kerkhove.pdf`" download>
        <button>Download my cv</button>
    </a>
    
</template>
<style lang="scss" scoped>
button {
  border: 2px solid;
  border-color: transparent;
  background-color: #00ADFF;
  color: #1f1f1f;
  border-radius: 0;
  padding: .2rem 1rem;
  transition: .3s;
  text-decoration: none;
  cursor: pointer;
  border-radius: .5rem;
}
button:hover{
    scale: 1.05;
    background-color: #2dbcff;
}
</style>