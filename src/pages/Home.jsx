import myFoto from "../assets/img/MyFoto/myFoto.jpg";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt,
    FaBootstrap,
    FaLaravel,
    FaDatabase,
    FaCertificate
} from "react-icons/fa";
import {SiTypescript, SiTailwindcss} from "react-icons/si";
import ContactComponent from "../components/ContactComponent.jsx";
import {Link} from 'react-router-dom';
import HighlightedProjects from "../components/HighlightedProjects.jsx";

// Допоміжний компонент для Skill
function SkillCard({Icon, label, color}) {
    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow flex items-center gap-3 transition-colors">
            <Icon className={`h-6 w-6 ${color}`}/>
            <span>{label}</span>
        </div>
    );
}

export default function Home() {

    return (
        <>
            {/*Hero section */}
            <div className="home-container">

                <section id="about" className="py-20 mb-12">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <img src={myFoto} alt="Yevhen Oshkukov"
                             className="w-44 h-44 rounded-full object-cover shadow-lg border-4 border-white
                        dark:border-gray-800 transition-theme-color"/>
                        <div>
                            <h2 className="text-4xl font-bold mb-4">Hi! I'm <span
                                className="text-blue-600">Yevhen Oshkukov</span></h2>
                            <p className="text-xl leading-relaxed mb-6">
                                A frontend developer passionate about building performant, accessible, and elegant user
                                interfaces.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="#contact"
                                   className="btn-style">Contact
                                    Me</a>
                                <a href="#projects"
                                   className="btn-style">View
                                    Projects</a>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Skills section */}
                <section id="skills" className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">Skills</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <SkillCard Icon={FaHtml5} label="HTML5" color="text-orange-500"/>
                        <SkillCard Icon={FaCss3Alt} label="CSS3" color="text-blue-500"/>
                        <SkillCard Icon={FaJs} label="JavaScript" color="text-yellow-500"/>
                        <SkillCard Icon={FaReact} label="React" color="text-blue-400"/>
                        <SkillCard Icon={FaGitAlt} label="Git" color="text-red-500"/>
                        <SkillCard Icon={FaBootstrap} label="Bootstrap" color="text-purple-500"/>
                        <SkillCard Icon={SiTailwindcss} label="Tailwind" color="text-sky-400"/>
                        <SkillCard Icon={FaLaravel} label="Laravel" color="text-red-600"/>
                        <SkillCard Icon={FaDatabase} label="SQL" color="text-red-600"/>
                        <SkillCard Icon={SiTypescript} label="TypeScript" color="text-blue-600"/>

                    </div>
                </section>


                {/*Education */}
                <section id="education" className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">Education</h2>
                    <div className="space-y-6">
                        <div
                            className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-800 dark:text-gray-300 transition-colors">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                                <div>
                                    <h3 className="font-bold text-xl">Bachelor’s degree | Applied mathematics</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mt-1">Ivan Franko National University
                                        of
                                        Lviv</p>
                                </div>
                                <p className="text-blue-600 font-medium mt-2 md:mt-0"> 09/1996 - 07/2002</p>
                            </div>
                        </div>
                        <div
                            className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-800 dark:text-gray-300 transition-colors">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                                <div>
                                    <h3 className="font-bold text-xl">Master’s degree | Information system and
                                        technologies</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mt-1">National Environmental
                                        University
                                        of
                                        Lviv</p>
                                </div>
                                <p className="text-blue-600 font-medium mt-2 md:mt-0"> 09/2022 - 04/2024</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/*Certificates Section (Added)*/}
                <section id="certificates" className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">Certificates</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-800 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="text-3xl text-blue-600">
                                    <FaCertificate className="text-blue-600 text-2xl"/>

                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Frontend Developer</h3>
                                    <p className="text-gray-600 dark:text-gray-400">Ciklum, Prometheus</p>
                                    <p className="mt-2 text-sm">Completed March 2023</p>
                                    <Link
                                        to="/certificates"
                                        className="text-blue-600 text-sm inline-block mt-2 hover:underline"
                                    >View
                                        Certificates</Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-800 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="text-3xl text-blue-600">
                                    <FaCertificate className="text-blue-600 text-2xl"/>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Full-stack developer</h3>
                                    <p className="text-gray-600 dark:text-gray-400">CBS, ITVDN</p>
                                    <p className="mt-2 text-sm">Completed December 2024</p>
                                    <Link
                                        to="/certificates"
                                        className="text-blue-600 text-sm inline-block mt-2 hover:underline"
                                    >View
                                        Certificates</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/*Projects*/}

                <section id="projects" className="scroll-mt-28">
                    <HighlightedProjects />
                </section>

                <section id="contact" className="scroll-mt-28">
                    <ContactComponent/>
                </section>

            </div>
        </>
    )
}