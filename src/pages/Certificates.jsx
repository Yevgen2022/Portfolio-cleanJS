import {useState} from "react";
import {FaTh, FaList} from 'react-icons/fa';
import {visualCertificates} from "../data/profileData.js";

export default function Certificates() {
    const [isGrid, setIsGrid] = useState(true);

    const toggleView = () => {
        setIsGrid((prev) => !prev);
    };

    return (
        <div className="max-w-6xl mx-auto py-20">
            <section>

                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold border-b pb-2 border-gray-300 dark:border-gray-700">
                        Certificates
                    </h2>

                    <button
                        onClick={toggleView}
                        className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition"
                        aria-label="Toggle View"
                    >
                        {isGrid ? <FaTh size={24}/> : <FaList size={24}/>}
                    </button>
                </div>

                {/* correctly opened container */}
                <div
                    className={`transition-all duration-500 ${
                        isGrid ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col gap-6"
                    }`}
                >
                    {visualCertificates.map((cert, index) => (
                        <div
                            key={index}
                            className={`bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow flex ${
                                isGrid
                                    ? "flex-col items-center text-center"
                                    : "flex-row items-center gap-4"
                            } hover:shadow-xl transition-shadow duration-300`}
                        >
                            <img
                                src={cert.img}
                                alt={cert.title}
                                className={`rounded object-contain ${
                                    isGrid
                                        ? "w-full h-48 mb-4"
                                        : "w-64 h-32"
                                } transform-el-scale`}
                            />
                            <div>
                                <h3 className="text-lg font-semibold">{cert.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{cert.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

