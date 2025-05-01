// src/store/useProjectsStore.js
import { create } from 'zustand';
import projectsData from '../data/projectsData.json';

export const useProjectsStore = create((set) => ({
    projects: [],
    loadProjects: () => set({ projects: projectsData }),
    getById: (id) => {
        const { projects } = useProjectsStore.getState();
        return projects.find((p) => p.id === id);
    },
    filterByType: (type) => {
        const { projects } = useProjectsStore.getState();
        return projects.filter((p) => p.type === type);
    },
}));
