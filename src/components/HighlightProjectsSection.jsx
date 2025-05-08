import {useProjectsStore} from "../store/useProjectsStore";
import HighlightProjectCard from "./HighlightProjectCard.jsx";

export default function HighlightProjectsSection() {
    // We get the entire list of projects
    const projects = useProjectsStore((state) => state.projects);

    // We select only those that are featured === "true"
    const highlighted = projects.filter((p) => p.featured === "true");

    return (
        <section id="projects" className="scroll-mt-28 mb-16">
            <h2 className="text-2xl font-bold mb-6">Highlighted Projects</h2>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                {/* We display each object through a separate card */}
                {highlighted.map((project) => (
                    <HighlightProjectCard key={project.id} project={project}/>
                ))}
            </div>
        </section>
    );
}
