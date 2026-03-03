import { readProjects } from "@/services/readFile";
import type { project } from "@/types/project";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useProjectsStore = defineStore("projects", () => {

  const projects = ref<project[]>([]);
  const loaded = ref(false);
  const loading = ref(false);
  const baseUrl = import.meta.env.BASE_URL

  const backupProjects: project[] = [];

  async function loadProjects(){
    if(loaded.value || loading.value) return;

    loading.value = true;

    try{
      const url = `${baseUrl}files/projects.json`
      projects.value = await readProjects(url);
      loaded.value = true
      console.log(projects)
    }
    catch{
      projects.value = backupProjects
    } finally{
      loading.value = false;
    }
  }
  return { projects, loaded, loading, loadProjects };
});
