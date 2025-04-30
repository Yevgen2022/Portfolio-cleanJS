// <!-- Contact -->
import {FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa";


export default function Contact() {
    return (
        <section id="contact" className="mb-16 py-20">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left side */}
                    <div>
                        <p className="mb-4">
                            I'm always open to new opportunities and collaborations. Feel free to reach out!
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="text-blue-600 text-xl">
                                    <FaEnvelope className="text-blue-600 text-xl"/>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                                    <a href="mailto:sy.yevhen.lc@gmail.com" className="text-blue-600 hover:underline">
                                        sy.yevhen.lc@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="text-blue-600 text-xl">
                                    <FaGithub className="text-blue-600 text-xl"/>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">GitHub</p>
                                    <a
                                        href="https://github.com/Yevgen2022"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Yevhen-Github
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="text-blue-600 text-xl">
                                    <FaLinkedin className="text-blue-600 text-xl"/>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">LinkedIn</p>
                                    <a
                                        href="https://www.linkedin.com/in/yevhen-oshkukov-436973254/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Yevhen-LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form
                        action="https://formspree.io/f/xqaqaqbr"
                        method="POST"
                        data-formspree="false"
                        className="space-y-4"
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-700"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-700"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-700"
                                required
                            ></textarea>
                        </div>

                        <input type="hidden" name="_next" value="thank.html"/>

                        <button
                            type="submit"
                            className="btn-style"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
