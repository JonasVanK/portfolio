<script setup lang="ts">
import type { project } from '@/types/project';
import HighlightedItem from './HighlightedItem.vue';
const baseUrl = import.meta.env.BASE_URL

defineProps<{
  project: project
}>();

const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString();
};
</script>

<template>
  <div class="card">
    <img :src="baseUrl + 'files' + project.image" :alt="project.title" class="card__image" />

    <div class="card__content">
      <div class="card__header">
        <h3>{{ project.title }}</h3>
        <span v-if="project.inProgress" class="badge">In Progress</span>
      </div>

      <p class="card__date">
        {{ formatDate(project.date) }}
      </p>

      <p class="card__description">
        {{ project.description }}
      </p>

      <div class="card__technologies">
        <HighlightedItem v-for="tech in project.technologies">{{ tech }}</HighlightedItem>
      </div>

      <a
        v-if="project.gitUrl"
        :href="project.gitUrl"
        target="_blank"
        class="card__link"
      >
        View on GitHub →
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 20rem;
  background: #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }

  &__image {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  &__content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h3 {
    margin: 0;
    font-size: 1.2rem;
    color: white;
  }

  &__date {
    font-size: 0.8rem;
    color: #aaa;
  }

  &__description {
    font-size: 0.9rem;
    color: #ddd;
  }

  &__technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 0.5rem;
  }

  .tech {
    background: #333;
    padding: 0.25rem 0.5rem;
    border-radius: 6px;
    font-size: 0.75rem;
    color: #fff;
  }

  .badge {
    background: #ff9800;
    padding: 0.2rem 0.5rem;
    font-size: 0.7rem;
    border-radius: 6px;
    color: black;
    font-weight: bold;
  }

  &__link {
    margin-top: 0.75rem;
    font-size: 0.85rem;
    color: #4ea8ff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>