// components/templates/LandingTemplate.jsx
export default function LandingTemplate({
                                            title,
                                            description,
                                            technologies = [],
                                            goals = [],
                                            links = [],
                                        }) {
    return (
        <div className="max-w-4xl mx-auto px-6 py-20">
            <section>
                {/* Project Title */}
                <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-gray-300 dark:border-gray-700">
                    {title}
                </h2>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>

                <div className="space-y-8">
                    {/* Technologies Used */}
                    <div>
                        <h3 className="project-detail-h3">Technologies Used:</h3>
                        <ul className="list-disc list-inside ml-4 text-gray-600 dark:text-gray-400">
                            {technologies.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Project Goals */}
                    <div>
                        <h3 className="project-detail-h3">The goal of this project is to:</h3>
                        <ul className="list-disc list-inside ml-4 text-gray-600 dark:text-gray-400">
                            {goals.map((goal, index) => (
                                <li key={index}>{goal}</li>
                            ))}
                        </ul>
                    </div>

                    {/* External Links */}
                    <div>
                        <h3 className="project-detail-h3">Links:</h3>
                        <ul className="list-inside ml-4 text-blue-600 dark:text-blue-400">
                            {links.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
