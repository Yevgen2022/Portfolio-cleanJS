import {NavLink} from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function Header() {

    const [darkMode, setDarkMode] = useState(false);

    // Effect for adding/removing the dark class
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
            // document.body.classList.add('dark');
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            // document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            // document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const handleThemeToggle = () => {
        setDarkMode(prev => !prev);
    };

    return (
        <>
            {/* Header */}
            <header
                className="fixed top-0 left-0 right-0 bg-white shadow-md p-6 z-50 dark:bg-gray-800 dark:text-gray-200 transition-theme-color">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Yevhen Oshkukov</h1>

                    <ul className="hidden md:flex space-x-6 text-base font-medium">
                        <li><NavLink to="/"
                                     className={({isActive}) => isActive ? "link-header activeLink-header-gray transition-theme-color" : "link-header"}>Home</NavLink>
                        </li>
                        <li><NavLink to="/resume"
                                     className={({isActive}) => isActive ? "link-header activeLink-header-gray transition-theme-color" : "link-header"}>Resume</NavLink>
                        </li>
                        <li><NavLink to="/education"
                                     className={({isActive}) => isActive ? "link-header activeLink-header-gray transition-theme-color" : "link-header"}>Education</NavLink>
                        </li>
                        <li><NavLink to="/certificates"
                                     className={({isActive}) => isActive ? "link-header activeLink-header-gray transition-theme-color" : "link-header"}>Certificates</NavLink>
                        </li>
                        <li><NavLink to="/projects"
                                     className={({isActive}) => isActive ? "link-header activeLink-header-gray transition-theme-color" : "link-header"}>Projects</NavLink>
                        </li>
                        <li><NavLink to="/contact"
                                     className={({isActive}) => isActive ? "link-header activeLink-header-gray transition-theme-color" : "link-header"}>Contact</NavLink>
                        </li>
                    </ul>


                    <div className="flex items-center space-x-4">
                        {/* Theme Toggle Button */}
                        <button
                                onClick={handleThemeToggle}
                                className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                                aria-label="Toggle Dark Mode"
                        >
                            <span id="sun" className="block dark:hidden">🌞</span>
                            <span id="moon" className="hidden dark:block">🌙</span>
                        </button>

                        {/* Mobile menu button */}
                        <button id="mobile-menu-button"
                                className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                </div>

                {/* Mobile menu (hidden by default) */}
                <div id="mobile-menu" className="hidden md:hidden mt-4 pt-4 border-t dark:border-gray-700">
                    <nav className="navigation px-2">
                        <ul className="flex flex-col space-y-1">
                            <li><NavLink to="/"
                                         className={({isActive}) => isActive ? "link-header activeLink-header-gray" : "link-header"}>Home</NavLink>
                            </li>
                            <li><NavLink to="/resume"
                                         className={({isActive}) => isActive ? "link-header activeLink-header-gray" : "link-header"}>Resume</NavLink>
                            </li>
                            <li><NavLink to="/education"
                                         className={({isActive}) => isActive ? "link-header activeLink-header-gray" : "link-header"}>Education</NavLink>
                            </li>
                            <li><NavLink to="/certificates"
                                         className={({isActive}) => isActive ? "link-header activeLink-header-gray" : "link-header"}>Certificates</NavLink>
                            </li>
                            <li><NavLink to="/projects"
                                         className={({isActive}) => isActive ? "link-header activeLink-header-gray" : "link-header"}>Projects</NavLink>
                            </li>
                            <li><NavLink to="/contact"
                                         className={({isActive}) => isActive ? "link-header activeLink-header-gray" : "link-header"}>Contact</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}
