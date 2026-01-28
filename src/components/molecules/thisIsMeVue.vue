<script setup lang="ts">
import DownloadButton from '../atoms/DownloadButton.vue';


</script>

<template>
    <div class="wrapper">
        <div>
            <h1>Hey, I am Jonas Van Kerkhove</h1>
            <p>Software developer from Belgium Be</p>
            <DownloadButton />
        </div>
        <div class="imageContainer">
            <img src="@/assets/profiel.jpg" alt="this is me">
        </div>
    </div>
</template>
<style lang="scss" scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-right: 2rem;
    gap: 1rem;
}

.imageContainer {
    width: 200px;
    aspect-ratio: 1 / 1;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    background-color: #f2f2f2;
    transition: transform 0.3s ease;
    align-self: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        /* fill container nicely */
        object-position: center;
        display: block;
    }
}
.imageContainer:hover{
    transform: scale(1.05);
}

@media (min-width: 500px) {
    .wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}
}
</style>