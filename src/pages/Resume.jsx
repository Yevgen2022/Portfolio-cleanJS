export default function Resume() {
    return (
        <div className="py-20">
            {/* Contact */}
            <div className="resume">
                <div className="flex justify-end">
                    <div className="text-base text-right max-w-sm">
                        <h2 className="text-lg font-bold mb-2">Contact</h2>
                        <p>Email: <a href="mailto:sy.yevhen.lc@gmail.com"
                                     className="text-blue-500 hover:underline">sy.yevhen.lc@gmail.com</a></p>
                        <p>LinkedIn: <a href="https://www.linkedin.com/in/yevhen-oshkukov-436973254/" target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline">Yevhen-LinkedIn</a></p>
                    </div>
                </div>
            </div>

            {/* Objective */}
            <section className="mb-10 mt-16">
                <h2 className="text-xl font-bold mb-2">Objective</h2>
                <p>
                    Front-end developer with strong self-learning motivation. Proficient in building SPA applications
                    using
                    React, TypeScript, and Tailwind CSS. Adept in REST API integration, state management, and clean code
                    principles. Seeking to join a tech-driven team where I can contribute and grow further.
                </p>
            </section>

            {/* Professional Experience */}
            <section className="mb-10">
                <h2 className="text-xl font-bold mb-2">Professional Experience</h2>

                {/* Experience 1 */}
                <div className="mb-6">
                    <h3 className="font-semibold">
                        Self-learning <span
                        className="text-sm text-gray-500 dark:text-gray-400">| Feb 2025 – Present</span>
                    </h3>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                        <li>Building a personal SPA project with React, TypeScript, Redux Toolkit, and Tailwind CSS.
                        </li>
                        <li>Implemented routing (React Router v6), JWT-based authentication, and theme switching
                            (dark/light mode).
                        </li>
                        <li>Integrated REST API data using async thunks and displayed paginated content with loading
                            states.
                        </li>
                        <li>Focused on clean, maintainable code (following ESLint/Prettier rules and DRY/KISS
                            principles).
                        </li>
                        <li>Practicing accessibility, performance optimization, and responsive design techniques.</li>
                        <li>Using Git and GitHub for version control and codebase organization.</li>
                    </ul>
                </div>

                {/* Experience 2 */}
                <div className="mb-6">
                    <h3 className="font-semibold">
                        Front-End Trainee — SincosSoftware (Norwegian company) <span
                        className="text-sm text-gray-500 dark:text-gray-400">| Feb 2024 – Feb 2025</span>
                    </h3>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                        <li>Worked on internal tools under mentorship, building reusable UI components with: Laravel,
                            React, Vue, JS, Tailwind CSS.
                        </li>
                        <li>Implemented REST API integration (Axios/fetch), routing (Vue Router/React Router), and
                            authentication flows.
                        </li>
                        <li>Developed internal tools and training projects under senior mentorship.</li>
                        <li>Assisted in backend tasks: creating Laravel routes, Blade views, and controllers using MVC
                            principles.
                        </li>
                        <li>Participated in weekly code reviews, received feedback from senior developers, and improved
                            problem-solving approach.
                        </li>
                        <li>Used GitHub for version control and collaboration.</li>
                        <li>Gained hands-on backend experience with Laravel and MVC.</li>
                    </ul>
                </div>

                {/* Experience 3 */}
                <div>
                    <h3 className="font-semibold">
                        Front-End Development - Prometheus, SBC, Laracast, Ciklum <span
                        className="text-sm text-gray-500 dark:text-gray-400">| Online Courses 2022 - 2024</span>
                    </h3>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                        <li>Completed comprehensive front-end development courses, focusing on JavaScript, <span
                            className="block ml-5">TypeScript, React, Redux, HTML5, CSS3, Tailwind CSS, and Git.</span>
                        </li>
                        <li>Built and deployed multiple projects (portfolio site, to-do app, weather app) using React
                            and modern tooling.
                        </li>
                        <li>Integrated APIs like TMDB and OpenWeather, implemented routing, state management with Redux,
                            and form validation.
                        </li>
                        <li>Practiced converting Figma designs into responsive, pixel-perfect layouts using Tailwind.
                        </li>
                        <li>Gained hands-on experience with Git, GitHub, and collaboration workflows.</li>
                    </ul>
                </div>
            </section>

            {/* Education */}
            <section className="mb-10">
                <h2 className="text-xl font-bold mb-2">Education</h2>
                <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Bachelor’s degree: Applied Mathematics — Ivan Franko National University of Lviv (1996–2002).
                    </li>
                    <li>Master’s degree: Information Systems and Technologies — National Environmental University of
                        Lviv (2022–2024).
                    </li>
                    <li>Online Courses (2022–2024): Prometheus, CBS, Laracast, Ciklum, ITVDN.</li>
                </ul>
            </section>

            {/* Technical Skills */}
            <section className="mb-10">
                <h2 className="text-xl font-bold mb-2">Technical Skills</h2>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 list-disc list-inside ml-4">
                    <li>JavaScript, TypeScript</li>
                    <li>HTML5, CSS3</li>
                    <li>React, Vue, Laravel</li>
                    <li>Redux Toolkit, Zustand</li>
                    <li>Tailwind CSS</li>
                    <li>Git, GitHub, GitLab, Figma</li>
                    <li>REST API, Routing, Authentication</li>
                    <li>MVC, SOLID, DRY</li>
                </ul>
            </section>

            {/* Languages */}
            <section className="mb-10">
                <h2 className="text-xl font-bold mb-2">Languages</h2>
                <div className="ml-9 space-y-2">
                    <p>English — Upper Intermediate (B2)</p>
                    <p>Ukrainian — Fluent</p>
                </div>
            </section>

            {/* Personal Skills */}
            <section className="mb-10">
                <h2 className="text-xl font-bold mb-2">Personal Skills</h2>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Detail-oriented and self-disciplined</li>
                    <li>Strong team player with good communication skills</li>
                    <li>Fast learner with a passion for new technologies</li>
                </ul>
            </section>
        </div>
    );
}
