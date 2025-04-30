import { useNavigate } from "react-router-dom";

export default function Projects() {
    const navigate = useNavigate();

    const projects = [
        {
            id: "weeb",
            name: "weeb",
            title: "Weeb Website",
            description: "Responsive landing page for a product based on a mock-up with Figma",
            type: "landing",
        },
        {
            id: "task-manager",
            name: "task-manager",
            title: "Task Manager App",
            description: "Full-Stack проект. React + Node.js + MongoDB. Менеджер задач із JWT авторизацією.",
            type: "frontend-app",
        },
        {
            id: "weather-app",
            name: "weather-app",
            title: "Weather App",
            description: "Пошук погоди за містом. Інтеграція з API OpenWeather, використання Fetch API.",
            type: "backend-app",
        },
    ];


    const handleViewDetails = (projectName) => {
        navigate(`/projects/${projectName}`);
    };

    return (
        <div className="max-w-6xl mx-auto py-20">
            <section>
                <h2 className="text-3xl font-bold mb-8 border-b pb-2 border-gray-300 dark:border-gray-700">
                    My Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col justify-between transition-colors duration-500"
                        >
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                    {project.description}
                                </p>
                            </div>
                            <button
                                onClick={() => handleViewDetails(project.name)}
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
