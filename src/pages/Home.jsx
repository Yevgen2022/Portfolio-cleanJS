import myFoto from "../assets/img/MyFoto/myFoto.jpg";
import {FaCertificate} from "react-icons/fa";
import ContactComponent from "../components/ContactComponent.jsx";
import {Link} from 'react-router-dom';
import HighlightedProjects from "../components/HighlightedProjects.jsx";
import SkillCard from "../components/SkillCard.jsx";
import EducationCard from "../components/EducationCard.jsx";
import CertificateCard from "../components/CertificateCard.jsx";
import {skills} from "../data/skillsData.js";
import {educations} from "../data/skillsData";
import {certificates} from "../data/skillsData";


export default function Home() {

    return (
        <>
            <div className="home-container">

                {/*Hero section */}
                <section id="about" className="py-20 mb-12">
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-center md:text-left">
                        <img
                            src={myFoto}
                            alt="Yevhen Oshkukov"
                            className="w-32 sm:w-52 md:w-44 lg:w-52 h-auto rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-800 transition-theme-color"
                        />
                        <div>
                            <h2 className="text-4xl font-bold mb-4">
                                Hi! I'm <span className="text-blue-600">Yevhen Oshkukov</span>
                            </h2>
                            <p className="text-xl leading-relaxed mb-6 max-w-2xl">
                                A frontend developer passionate about building performant, accessible, and elegant user
                                interfaces.
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                <a href="#contact" className="btn-style">
                                    Contact Me
                                </a>
                                <a href="#projects" className="btn-style">
                                    View Projects
                                </a>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Skills section */}
                <section id="skills" className="mb-16">

                    <h2 className="text-2xl font-bold mb-6">Skills</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {skills.map((skill, index) => (
                            <SkillCard key={index} {...skill} />
                        ))}
                    </div>

                </section>


                {/*Education */}
                <section id="education" className="mb-16">

                    <h2 className="text-2xl font-bold mb-6">Education</h2>

                    <div className="space-y-6">
                        {educations.map((edu, index) => (
                            <EducationCard key={index} {...edu} />
                        ))}
                    </div>

                </section>


                {/*Certificates Section (Added)*/}
                <section id="certificates" className="mb-16">

                    <h2 className="text-2xl font-bold mb-6">Certificates</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {certificates.map((cert, index) => (
                            <CertificateCard key={index} {...cert} />
                        ))}
                    </div>

                </section>


                {/*Projects*/}

                <section id="projects" className="scroll-mt-28">
                    <HighlightedProjects/>
                </section>

                <section id="contact" className="scroll-mt-28">
                    <ContactComponent/>
                </section>

            </div>
        </>
    )
}