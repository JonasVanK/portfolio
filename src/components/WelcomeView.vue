<script setup lang="ts">
import type { textBlock } from '@/types/textBox';
import TextBlock from './atoms/TextBlock.vue';
import ListView from './molecules/ListView.vue';
import ProjectList from './molecules/ProjectList.vue';
import ThisIsMeVue from './molecules/thisIsMeVue.vue';

const skills = {
  programmingLanguages: [
    "JavaScript",
    "TypeScript",
    "PHP",
    "Python",
    "Java",
    "C#",
    "C",
    "Assembly"
  ],
  frontend: [
    "HTML",
    "CSS",
    "scss",
    "Vue",
    "Vite",
    "Blazor",
    "React Native"
  ],
  backend: [
    "Node.js",
    "NestJS",
    "Laravel",
    "ASP.NET",
    ".NET"
  ],
  Database: [
    "MongoDB",
    "PostgreSQL",
    "SQL",
    "MYSQL",
    "Firebase/Firestore"
  ]
}

const aboutMe : textBlock = {
  text: "Hi, I'm Jonas Van Kerkhove! I'm a passionate developer with a love for turning ideas into digital experiences. With a focus on clean code and creative solutions, I enjoy building projects that solve real-world problems. When I'm not coding, I'm exploring new technologies and learning.",
  title: "About me"
}

</script>

<template>
  <ThisIsMeVue/>
  <TextBlock :text-block="aboutMe"/>
  <ListView :list="skills.programmingLanguages">programming languages</ListView>
  <ListView :list="skills.frontend">Frontend Frameworks</ListView>
  <ListView :list="skills.backend">Backend</ListView>
  <ListView :list="skills.Database">Databases / BaaS</ListView>
  <ProjectList />
</template>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: center;
  margin-left: 1rem;
  margin-top: 1rem;
}
</style>
