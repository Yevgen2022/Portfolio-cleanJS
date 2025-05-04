import { Link } from "react-router-dom";
import frontendImg from '../assets/img/ProjectsFoto/frontend-app.png';
import backendImg from '../assets/img/ProjectsFoto/backend-app.png';
import landingImg from '../assets/img/ProjectsFoto/landing.png';


// Accepts an object project
export default function ProjectHighlightCard({ project }) {

    const typeToImage = {
        'frontend-app': frontendImg,
        'backend-app': backendImg,
        'landing': landingImg,
    };

    // Creating a path to an image by type
    const imagePath = typeToImage[project.type];

    // We choose the first 3 technologies
    const tech = project.technologies.slice(0, 3);

    return (
        <div className="bg-white shadow-md hover:shadow-xl rounded-2xl overflow-hidden transition-all duration-300 dark:bg-gray-800 dark:text-gray-200">
            {/* Go to the project page via <Link> */}
            <Link to={`/projects/${project.id}`} className="block group">
                <div className="aspect-[4/3] object-fill md:aspect-[3/3] bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <img
                        src={imagePath}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition">
                        {project.title}
                    </h3>
                    <p className="mb-4 text-gray-600 dark:text-gray-400">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {tech.map((item) => (
                            <span
                                key={item}
                                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-200"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </Link>
        </div>
    );
}
