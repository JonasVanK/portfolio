<script setup lang="ts">
import type { project } from '@/types/project';
import HighlightedItem from '../atoms/HighlightedItem.vue';
import { useProjectsStore } from '@/stores/projects';

const projectStore = useProjectsStore();

const projects : project[] = projectStore.projects

</script>

<template>
    <div>
        <ul>
            <li v-for="project in projects">
                <p>{{ project.title }}</p>
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