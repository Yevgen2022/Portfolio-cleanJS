import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";


export default function Footer() {
    return (
        <footer
            className="dark-bg-tx text-center p-6 border-t text-gray-500   dark:border-gray-700">
            <div className="max-w-6xl mx-auto">

                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://github.com/Yevgen2022?tab=repositories" target="_blank"
                       className="text-gray-400 hover:text-blue-600">
                        <FaGithub className="text-xl"/>
                    </a>
                    <a href="https://www.linkedin.com/in/yevhen-oshkukov-436973254/" target="_blank"
                       className="text-gray-400 hover:text-blue-600">
                        <FaLinkedin className="text-xl"/>
                    </a>
                    <a href="mailto:sy.yevhen.lc@gmail.com" className="text-gray-400 hover:text-blue-600">
                        <FaEnvelope className="text-xl"/>
                    </a>
                </div>

                <p>&copy; 2025 Yevhen Oshkukov — Frontend Developer</p>
            </div>
        </footer>
    )
}