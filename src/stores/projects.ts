import type { project } from "@/types/project";
import { defineStore } from "pinia";

export const useProjectsStore = defineStore("projects", () => {
  const projects: project[] = [
    {
      title: "Full-Stack Task Management App",
      image: "/images/projects/task-manager.png",
      date: new Date("2024-06-01"),
      description:
        "Een full-stack webapplicatie voor het beheren van taken en projecten. Gebruikers kunnen accounts aanmaken, taken organiseren en realtime updates ontvangen via een API.",
      technologies: [
        "TypeScript",
        "Vue",
        "Vite",
        "Node.js",
        "NestJS",
        "GraphQL",
        "MySQL",
      ],
      gitUrl: null,
    },
    {
      title: "Mobile Fitness Tracker",
      image: "/images/projects/fitness-tracker.png",
      date: new Date("2023-11-15"),
      description:
        "Een mobiele applicatie voor het bijhouden van workouts en voortgang. De app synchroniseert data met een backend en toont statistieken in een overzichtelijk dashboard.",
      technologies: ["React Native", "JavaScript", "ASP.NET", ".NET", "SQL"],
      gitUrl: null,
    },
  ];

  return { projects };
});
