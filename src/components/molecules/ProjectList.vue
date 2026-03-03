<script setup lang="ts">
import { useProjectsStore } from '@/stores/projects';
import ProjectCard from '../atoms/ProjectCard.vue';

const projectStore = useProjectsStore();
projectStore.loadProjects();

</script>

<template>
    <div>
        <h2>My projects</h2>
        <ul>
            <li v-for="project in projectStore.projects">
                <ProjectCard :project="project"></ProjectCard>
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
        justify-content: center;
        gap: 2rem;
        padding: 0;
        margin: 0;

        li {
            display: inherit;
        }
    }
}
</style>