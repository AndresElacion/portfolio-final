import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { GitHubIcon } from "./GithubIcon";
import { useActiveSection } from "../hooks/useActiveSection";

export default function WelcomeLayout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const activeSection = useActiveSection();

    const navItems = [
        { id: 'hero', title: 'Home' },
        { id: 'skills', title: 'Skills' },
        { id: 'projects', title: 'Projects' },
        { id: 'contact', title: 'Contact' },
    ];

    return (
        <div>
            <div className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg z-50">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link to="/" className="flex-shrink-0">
                            <code className="text-2xl font-bold text-gray-900 dark:text-white">
                                ciondev
                            </code>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center justify-center space-x-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className={`px-3 py-2 rounded-lg transition-all duration-200 
                                             ${activeSection === item.id
                                                ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                             }`}
                                >
                                    {item.title}
                                </a>
                            ))}
                            <div className="flex items-center space-x-4 ml-4 border-l pl-4 dark:border-gray-700">
                                <ThemeToggle />
                                <a 
                                    href="https://github.com/AndresElacion" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                                >
                                    <GitHubIcon className="w-5 h-5" />
                                </a>
                            </div>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            <svg 
                                className="w-6 h-6 text-gray-700 dark:text-gray-300" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div 
                    className={`md:hidden transition-all duration-300 ease-in-out 
                               ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                    <nav className="px-4 pt-2 pb-4 space-y-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md text-center">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block px-3 py-2 rounded-lg transition-colors 
                                          ${activeSection === item.id
                                            ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                          }`}
                            >
                                {item.title}
                            </a>
                        ))}
                        <div className="flex items-center space-x-4 px-3 py-2">
                            <ThemeToggle />
                            <a 
                                href="https://github.com/AndresElacion" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                            >
                                <GitHubIcon className="w-5 h-5" />
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
            <Outlet />
        </div>
    );
}