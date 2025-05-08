import myFoto from "../assets/img/MyFoto/myFoto.jpg";
import ContactComponent from "../components/ContactComponent.jsx";
import HighlightedProjectsSection from "../components/HighlightedProjectsSection.jsx";
import CertificateCard from "../components/CertificateCard.jsx";
import SkillsSection from "../components/SkillsSection.jsx";
import EducationSection from "../components/EducationSection.jsx";
import CertificateSection from "../components/CertificateSection.jsx";


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
                    <SkillsSection />
                </section>


                {/*Education */}
                <section id="education" className="mb-16">
                    <EducationSection />
                </section>


                {/*Certificates Section (Added)*/}
                <section id="certificates" className="mb-16">
                    <CertificateSection />
                </section>


                {/*Projects*/}
                <section id="projects" className="scroll-mt-28">
                    <HighlightedProjectsSection/>
                </section>


                <section id="contact" className="scroll-mt-28">
                    <ContactComponent/>
                </section>

            </div>
        </>
    )
}