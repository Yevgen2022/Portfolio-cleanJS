import {useNavigate} from "react-router-dom";
import {useProjectsStore} from '../store/useProjectsStore';

export default function Projects() {

    const navigate = useNavigate();

    const projects = useProjectsStore((state) => state.projects);

    const handleViewDetails = (projectName) => {
        navigate(`/projects/${projectName}`);
    };

    return (
        <div className="max-w-6xl mx-auto py-20">
            <section>
                <h2 className="text-3xl font-bold mb-8 border-b pb-4 border-gray-300 dark:border-gray-700">
                    My Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="relative bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col justify-between transition-colors duration-500"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-semibold">{project.title}</h3>
                                    <span
                                        className="absolute top-6 right-6 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300 capitalize">
                                        {project.type.replace("-", " ")}
                                        </span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                    {project.description}
                                </p>
                            </div>
                            <button
                                onClick={() => handleViewDetails(project.id)}
                                className="mt-4 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors duration-300 w-full"
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
