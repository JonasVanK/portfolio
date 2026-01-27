<script setup lang="ts">
import type { textBlock } from '@/types/textBox';


const props = defineProps<{textBlock: textBlock}>();

</script>

<template>
    <div>
        <h3 v-if="textBlock.title">{{ textBlock.title }}</h3>
        <p v-if="textBlock.text">{{ textBlock.text }}</p>
    </div>
</template>
<style lang="scss" scoped>
div {
    display: flex;
    flex-direction: column;
    color: white;
}
</style>