export default function Education() {
    return (
        <div className="max-w-6xl mx-auto py-20">
            <section>
                <h2 className="text-3xl font-bold mb-8 border-b pb-2 border-gray-300 dark:border-gray-700">
                    Education
                </h2>

                {/* Higher Education */}
                <div className="space-y-6">
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
                        <h3 className="text-xl font-semibold">Bachelor’s degree in Applied Mathematics</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Ivan Franko National University of Lviv, 1996–2002
                        </p>
                        <p className="mt-2">
                            Focused on applied mathematics, programming, algorithm design, and fundamentals of computer science and information technologies.
                        </p>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
                        <h3 className="text-xl font-semibold">Master’s degree: Information Systems and Technologies</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            National Environmental University of Lviv, 2022–2024
                        </p>
                        <p className="mt-2">
                            Focused on software engineering, databases, and system architecture.
                        </p>
                    </div>
                </div>

                {/* Courses */}
                <h3 className="text-2xl font-bold mt-12 mb-6 border-b pb-2 border-gray-300 dark:border-gray-700">
                    Courses
                </h3>
                <div className="space-y-6">

                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
                        <h4 className="text-lg font-semibold">English course B2 level</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Green Forest 2025</p>
                        <p className="mt-2">
                            Practiced advanced grammar, technical vocabulary, and real-life communication scenarios for the IT industry.
                        </p>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
                        <h4 className="text-lg font-semibold">Full-Stack Web Development</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">CBS, ITVDN 2024</p>
                        <p className="mt-2">
                            Covered React, Node.js, Laravel, HTML, CSS, Typescript, Tailwind, SQL and project deployment.
                        </p>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
                        <h4 className="text-lg font-semibold">English course B1 level</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Green Forest 2024</p>
                        <p className="mt-2">
                            Covered grammar, reading, and speaking practice with emphasis on understanding and discussing technical topics in English.
                        </p>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
                        <h4 className="text-lg font-semibold">Frontend Development</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Ciklum, Prometheus 2023</p>
                        <p className="mt-2">
                            Covered HTML, CSS, JS, React, Bootstrap.
                        </p>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
                        <h4 className="text-lg font-semibold">QA/QC Engineer</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Dotli-online university, 2022</p>
                        <p className="mt-2">
                            Covered software testing methodologies, test case creation, test levels, defect tracking, and basics of databases.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
}
