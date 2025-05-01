// === FRONTEND APP TEMPLATE ===
export function FrontendAppTemplate({ title, description, technologies, features, challenges, repoLink, liveDemo }) {
    return (
        <div className="max-w-4xl mx-auto px-6 py-20">
            <section>
                {/* Title and Intro */}
                <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-gray-300 dark:border-gray-700">
                    {title}
                </h2>

                <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>

                <div className="space-y-8">
                    {/* Technologies Used */}
                    <div>
                        <h3 className="project-detail-h3">Technologies Used:</h3>
                        <ul className="list-disc list-inside ml-4 text-gray-600 dark:text-gray-400">
                            {technologies.map((tech, index) => <li key={index}>{tech}</li>)}
                        </ul>
                    </div>

                    {/* Features */}
                    <div>
                        <h3 className="project-detail-h3">Key Features:</h3>
                        <ul className="list-disc list-inside ml-4 text-gray-600 dark:text-gray-400">
                            {features.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </div>

                    {/* Development Challenges */}
                    <div>
                        <h3 className="project-detail-h3">Challenges and Solutions:</h3>
                        <ul className="list-disc list-inside ml-4 text-gray-600 dark:text-gray-400">
                            {challenges.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="project-detail-h3">Links:</h3>
                        <ul className="list-inside ml-4 text-blue-600 dark:text-blue-400">
                            <li><a href={repoLink} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub Repository</a></li>
                            <li><a href={liveDemo} target="_blank" rel="noopener noreferrer" className="hover:underline">Live Demo</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}