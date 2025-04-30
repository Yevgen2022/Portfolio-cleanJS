
export default function WeebProjectDetails() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-20">
            <section>
                <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-gray-300 dark:border-gray-700">
                    Weeb. Responsive landing page for a product based on a mock-up with Figma
                </h2>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    This project aims to create a single-page website (landing page) to showcase a product or service. The site
                    design will be based on a mockup created in Figma and will include responsive design to display correctly on
                    various devices — from mobile phones to large PC screens.
                </p>

                <div className="space-y-8">
                    {/* Technologies */}
                    <div>
                        <h3 className="project-detail-h3">Technologies Used:</h3>
                        <ul className="list-disc list-inside ml-4 text-gray-600 dark:text-gray-400">
                            <li>HTML5</li>
                            <li>CSS3 with Flexbox and Grid to create responsive layouts.</li>
                            <li>JavaScript for interactive elements</li>
                            <li>Figma — for getting a design mockup.</li>
                            <li>Media Queries — for responsive design that adjusts the interface to different screen sizes.</li>
                        </ul>
                    </div>

                    {/* Goal */}
                    <div>
                        <h3 className="project-detail-h3">The goal of this project is to develop a landing page that:</h3>
                        <ul className="list-disc list-inside ml-4 text-gray-600 dark:text-gray-400">
                            <li>Meets all the requirements of responsive design.</li>
                            <li>Implements designs created in Figma using modern web technologies.</li>
                            <li>It has an intuitive interface and is user-friendly.</li>
                            <li>Provides fast loading on all devices.</li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="project-detail-h3">Links:</h3>
                        <ul className="list-inside ml-4 text-blue-600 dark:text-blue-400">
                            <li>
                                <a
                                    href="https://github.com/Yevgen2022/responsive-site-figma-weeb"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    GitHub Repository
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://yevgen2022.github.io/responsive-site-figma-weeb/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    Live Demo
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
