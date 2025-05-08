import { Link } from "react-router-dom";
import frontendImg from '../assets/img/ProjectsFoto/frontend-app320.png';
import backendImg from '../assets/img/ProjectsFoto/backend-app320.png';
import landingImg from '../assets/img/ProjectsFoto/landing320.png';

export default function HighLightProjectCard({ project }) {
    const typeToImage = {
        'frontend-app': frontendImg,
        'backend-app': backendImg,
        'landing': landingImg,
    };

    const imagePath = typeToImage[project.type];
    const tech = project.technologies.slice(0, 3);

    return (
        <Link
            to={`/projects/${project.id}`}
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 shadow-md hover:shadow-xl rounded-xl overflow-hidden transition-all duration-300 flex flex-col sm:flex-row md:flex-col group"
        >
            {/* image */}
            <div className="sm:w-1/2 md:w-full aspect-square sm:aspect-auto md:aspect-square bg-gray-200 dark:bg-gray-700 overflow-hidden rounded-xl ">
                <img
                    src={imagePath}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-300 "
                />
            </div>

            {/* contents */}
            <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow">
                <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-blue-600 transition">
                        {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                        {project.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
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
    );
}
