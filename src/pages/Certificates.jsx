import { useState } from "react";

import htmlcssCert from "../assets/img/htmlcss.png";
import ciklumCert from "../assets/img/Ciklum.png";
import testEngineerCert from "../assets/img/TestEngineer.png";
import greenForestB2Cert from "../assets/img/Green Forest Certificate(B2).png";
import greenForestB1Cert from "../assets/img/Green Forest Certificate(B1).PNG";

export default function Certificates() {
    const [isGrid, setIsGrid] = useState(true);

    const toggleView = () => {
        setIsGrid((prev) => !prev);
    };

    // Дані сертифікатів
    const certificates = [
        { img: htmlcssCert, title: "HTML, CSS Development", desc: "CBS, ITVDN 2024" },
        { img: ciklumCert, title: "Frontend Developer", desc: "Ciklum, Prometheus 2023" },
        { img: testEngineerCert, title: "QA/QC Engineer", desc: "Dotli-online university, 2022" },
        { img: greenForestB2Cert, title: "English course B2 level", desc: "Green Forest, 2025" },
        { img: greenForestB1Cert, title: "English course B1 level", desc: "Green Forest, 2024" },
    ];

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
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isGrid ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* correctly opened container */}
                <div
                    className={`transition-all duration-500 ${
                        isGrid ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col gap-6"
                    }`}
                >
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            className={`bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow flex ${
                                isGrid
                                    ? "flex-col items-center text-center"
                                    : "flex-row items-center gap-4"
                            } transition-transform duration-300 transform hover:scale-105`}
                        >
                            <img
                                src={cert.img}
                                alt={cert.title}
                                className={`rounded object-cover ${
                                    isGrid
                                        ? "w-full h-48 mb-4"
                                        : "w-48 h-32"
                                } transition-transform duration-300 transform hover:scale-105`}
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

