import {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {FaBars, FaSun, FaMoon} from 'react-icons/fa';

export default function Header() {
    const [darkMode, setDarkMode] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Load theme from localStorage on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    // Update dark class
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const handleThemeToggle = () => setDarkMode(prev => !prev);
    const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <header
            className="dark-bg-tx fixed top-0 left-0 right-0 shadow-md p-4 md:p-5 lg:p-6 z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center gap-2">
                {/* Logo */}
                <h1 className="text-lg md:text-xl lg:text-2xl font-bold whitespace-nowrap">
                    Yevhen Oshkukov
                </h1>

                {/* Desktop navigation — with md and height */}
                <ul className="hidden md:flex justify-between lg:space-x-6 text-sm md:text-base lg:text-lg font-medium">
                    {['/', '/resume', '/education', '/certificates', '/projects', '/contact'].map((path, i) => {
                        const label = ['Home', 'Resume', 'Education', 'Certificates', 'Projects', 'Contact'][i];
                        return (
                            <li key={path}>
                                <NavLink
                                    to={path}
                                    className={({isActive}) =>
                                        isActive
                                            ? "link-header activeElem-header"
                                            : "link-header"
                                    }
                                >
                                    {label}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>

                {/* Mobile controls – only TO md */}
                <div className="flex items-center gap-2 md:hidden">
                    <button
                        onClick={handleThemeToggle}
                        className="p-2 rounded-md menu-theme-btn"
                        aria-label="Toggle Dark Mode"
                    >

                        {/* Show icon depending on theme */}
                        {darkMode ? <FaMoon className="text-yellow-400"/> : <FaSun className="text-yellow-500"/>}
                    </button>

                    <button
                        onClick={toggleMobileMenu}
                        className="p-2 rounded-md menu-theme-btn"
                        aria-label="Toggle Mobile Menu"
                    >
                        <FaBars size={20}/>
                    </button>
                </div>

                {/* Theme toggle for md+ screens */}
                <div className="hidden md:block">
                    <button
                        onClick={handleThemeToggle}
                        className="p-2 activeElem-header"
                        aria-label="Toggle Dark Mode"
                    >
                        {/* Show icon depending on theme */}
                        {darkMode ? <FaMoon className="text-yellow-400"/> : <FaSun className="text-yellow-500"/>}

                    </button>
                </div>
            </div>

            {/* Mobile menu — only TO md */}
            {isMobileMenuOpen && (
                <div className="md:hidden mt-4 pt-4 border-t">
                    <nav className="navigation px-2">
                        <ul className="flex flex-col space-y-1">
                            {['/', '/resume', '/education', '/certificates', '/projects', '/contact'].map((path, i) => {
                                const label = ['Home', 'Resume', 'Education', 'Certificates', 'Projects', 'Contact'][i];
                                return (
                                    <li key={path}>
                                        <NavLink
                                            to={path}
                                            onClick={closeMobileMenu}
                                            className={({isActive}) =>
                                                isActive
                                                    ? "link-header activeElem-header"
                                                    : "link-header"
                                            }
                                        >
                                            {label}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
}

