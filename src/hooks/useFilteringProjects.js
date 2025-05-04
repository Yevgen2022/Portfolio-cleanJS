import { useState } from "react";
import { useProjectsStore } from "../store/useProjectsStore";

export function useFilteredProjects() {
    // We receive all projects from Zustand
    const projects = useProjectsStore((state) => state.projects);

    // State of the selected filter
    const [selectedType, setSelectedType] = useState("all");

    // Filter change handler
    const handleFilterChange = (e) => {
        setSelectedType(e.target.value);
    };

    // Calculating a filtered list
    const filteredProjects =
        selectedType === "all"
            ? projects
            : projects.filter((project) => project.type === selectedType);

    // We return all the parts needed in the component
    return {
        filteredProjects,
        selectedType,
        handleFilterChange,
    };
}
