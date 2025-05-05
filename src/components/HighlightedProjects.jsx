import { useProjectsStore } from "../store/useProjectsStore";
import ProjectHighlightCard from "./ProjectHighlightCard";

export default function HighlightedProjects() {
    // We get the entire list of projects
    const projects = useProjectsStore((state) => state.projects);

    // We select only those that are featured === "true"
    const highlighted = projects.filter((p) => p.featured === "true");

    return (
        <section id="projects" className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Highlighted Projects</h2>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                {/* We display each object through a separate card */}
                {highlighted.map((project) => (
                    <ProjectHighlightCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}
