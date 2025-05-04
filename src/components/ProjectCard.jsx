// components/ProjectCard.jsx
import React from 'react';

export default function ProjectCard({ project, onViewDetails }) {
    return (
        <div
            className="relative bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 flex flex-col justify-between hover:shadow-xl duration-300"
        >
            <div>
                <div className="flex items-center justify-between mb-4 pr-16">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className="absolute top-4 right-4 project-label">
                        {project.type.replace("-", " ")}
                    </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {project.description}
                </p>
            </div>
            <button
                onClick={() => onViewDetails(project.id)}
                className="mt-4 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors duration-300 w-full"
                // className="btn-style"
            >
                View Details
            </button>
        </div>
    );
}
