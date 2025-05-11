import { useNavigate } from "react-router-dom";
import { useFilteredProjects } from "../hooks/useFilteringProjects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {

    const navigate = useNavigate();

    const {
        filteredProjects,
        selectedType,
        handleFilterChange,
        types,
    } = useFilteredProjects();

    const handleViewDetails = (projectId) => {
        navigate(`/projects/${projectId}`);
    };

    return (
        <div className="max-w-6xl mx-auto py-20">
            <section>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                    <h2 className="text-3xl font-bold border-b sm:border-none pb-4 sm:pb-0 border-gray-300 dark:border-gray-700">
                        My Projects
                    </h2>

                    <select
                        className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        value={selectedType}
                        onChange={handleFilterChange}
                    >

                        {types.map((type) => (
                            <option key={type} value={type}>
                                {type === "all" ? "All projects" : type.replace("-", " ")}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onViewDetails={handleViewDetails}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
