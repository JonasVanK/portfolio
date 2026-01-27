<script setup lang="ts">
import HighlightedItem from '../atoms/HighlightedItem.vue';

defineProps(['list'])

</script>

<template>
    <div>
        <h2>
            <slot></slot>
        </h2>
        <ul>
            <li v-for="item in list">
                <HighlightedItem>{{ item }}</HighlightedItem>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
div {
    display: flex;
    flex-direction: column;

    h2{
        color: white;
    }

    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 0;
        margin: 0;
        gap: .5rem;

        li {
            display: inherit;
        }
    }
}
</style>