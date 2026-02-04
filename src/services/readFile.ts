import type { project } from "@/types/project";

export async function readProjects(url: string) : Promise<project[]>{
    const response = await fetch(url);
    
    if(!response.ok){
        throw new Error("failed to fetch projects");
    }

    const projects = await response.json();

    return projects;
}