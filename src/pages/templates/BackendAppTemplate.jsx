// === BACKEND APP TEMPLATE ===
export function BackendAppTemplate({
                                       title,
                                       description,
                                       technologies,
                                       architecture,
                                       endpoints,
                                       security,
                                       challenges,
                                       repoLink,
                                       liveDemo
                                   }) {
    return (
        <div className="max-w-4xl mx-auto px-6 py-20">
            <section>
                {/* Title and Description */}
                <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-gray-300 dark:border-gray-700">
                    {title}
                </h2>

                <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>

                <div className="space-y-8">
                    {/* Tech Stack */}
                    <div>
                        <h3 className="project-detail-h3">Backend Technologies Used:</h3>
                        <ul className="list-disc list-inside ml-4 text-gray-600 dark:text-gray-400">
                            {technologies.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </div>

                    {/* System Architecture Overview */}
                    <div>
                        <h3 className="project-detail-h3">Architecture Overview:</h3>
                        <p className="text-gray-600 dark:text-gray-400">{architecture}</p>
                    </div>

                    {/* REST API Endpoints */}
                    <div>
                        <h3 className="project-detail-h3">REST API Endpoints:</h3>
                        <ul className="list-disc list-inside ml-4 text-gray-600 dark:text-gray-400">
                            {endpoints.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </div>

                    {/* Security & Auth */}
                    <div>
                        <h3 className="project-detail-h3">Authentication & Security:</h3>
                        <p className="text-gray-600 dark:text-gray-400">{security}</p>
                    </div>

                    {/* Challenges */}
                    <div>
                        <h3 className="project-detail-h3">Development Challenges:</h3>
                        <ul className="list-disc list-inside ml-4 text-gray-600 dark:text-gray-400">
                            {challenges.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="project-detail-h3">Links:</h3>
                        <ul className="list-inside ml-4 text-blue-600 dark:text-blue-400">
                            <li><a href={repoLink} target="_blank" rel="noopener noreferrer"
                                   className="hover:underline">GitHub Repository</a></li>
                            {/*<li><a href={liveDemo} target="_blank" rel="noopener noreferrer" className="hover:underline">Live Demo / Swagger</a></li>*/}
                            <li className="flex items-center gap-2">
                                {liveDemo ? (
                                    <a
                                        href={liveDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline text-blue-600 dark:text-blue-400"
                                    >
                                        Live Demo / Swagger
                                    </a>
                                ) : (
                                    <>
                                  <span className="text-gray-400 cursor-not-allowed select-none">
                                   Live Demo / Swagger
                                  </span>
                                        <span className="text-sm text-gray-500 italic">Live Demo Coming Soon</span>
                                    </>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

{/* Links */
}
// <div>
//     <h3 className="project-detail-h3">Links:</h3>
//     <ul className="list-inside ml-4 text-blue-600 dark:text-blue-400 space-y-2">
//         {repoLink && (
//             <li>
//                 <a
//                     href={repoLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:underline"
//                 >
//                     GitHub Repository
//                 </a>
//             </li>
//         )}
//
//         {demoLink ? (
//             <li>
//                 <a
//                     href={demoLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:underline"
//                 >
//                     Live Demo / Swagger
//                 </a>
//             </li>
//         ) : videoDemo ? (
//             <li>
//                 <a
//                     href={videoDemo}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:underline"
//                 >
//                     Watch Demo Video
//                 </a>
//             </li>
//         ) : (
//             <li className="text-sm italic text-gray-500 dark:text-gray-400">
//                 No demo available. Please see README for setup instructions.
//             </li>
//         )}
//     </ul>
// </div>
