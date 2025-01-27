import { BlurCircle } from "../Components/BlurCircle";
import WelcomeLayout from "../Components/WelcomeLayout"
import Skills from "./Skills"
import Projects from "./Projects"
import { Typewriter } from 'react-simple-typewriter'
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa'

export default function Home() {
    return (
        <section id="hero" >
            <WelcomeLayout />
            <main className="relative min-h-screen bg-gray-100 dark:bg-gray-900 overflow-hidden">
                <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10">
                    <BlurCircle 
                        color="bg-blue-500" 
                        position="-top-40 -left-40" 
                        size="w-96 h-96"
                        opacity="opacity-30"
                    />
                    <BlurCircle 
                        color="bg-purple-500" 
                        position="top-40 right-0" 
                        size="w-96 h-96"
                        opacity="opacity-20"
                    />
                    
                    <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                        {/* Optional: Add your image */}
                        <img 
                            src="./img/avatar.png" 
                            alt="Andres Elacion III"
                            className="w-36 h-36 rounded-full mx-auto mb-6 border-4 border-blue-500/20"
                        />

                        <h1 className="text-4xl sm:text-6xl font-bold dark:text-gray-300 mb-4">
                            Andres Elacion III
                        </h1>

                        <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-6">
                            <Typewriter
                                words={['Full Stack Developer', 'AWS', 'GCP', 'UI/UX Enthusiast']}
                                loop={0}
                                cursor
                                cursorStyle='|'
                            />
                        </h2>

                        <p className="text-lg dark:text-gray-300 mb-8 leading-relaxed">
                            A Full Stack Web Developer from the Philippines, crafting stunning, 
                            user-friendly websites and web apps, with expertise in deploying on AWS 
                            EC2 and GCP, setting up SSL certificates.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex justify-center gap-4 mb-8">
                            <a 
                                href="#contact" 
                                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Get in Touch
                            </a>
                            <a 
                                href="/resume.pdf" 
                                className="px-8 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600/10 transition-colors"
                                target="_blank"
                            >
                                Download CV
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center gap-4 mb-12">
                            <a href="https://github.com/AndresElacion" target="_blank" className="text-2xl hover:text-blue-600 transition-colors">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/andres-elacion/" target="_blank" className="text-2xl hover:text-blue-600 transition-colors">
                                <FaLinkedin />
                            </a>
                        </div>

                        {/* Scroll Indicator */}
                        <div className="animate-bounce text-gray-400">
                            <a href="#skills"><FaArrowDown className="mx-auto" /></a>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="relative min-h-screen py-20">
                    <BlurCircle 
                        color="bg-cyan-500" 
                        position="top-1/4 right-0" 
                        size="w-72 h-72"
                        opacity="opacity-20"
                    />
                    <BlurCircle 
                        color="bg-purple-500" 
                        position="bottom-0 left-1/4" 
                        size="w-96 h-96"
                        opacity="opacity-20"
                    />
                    
                    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                        <Skills />
                    </div>
                </section>

                {/* Projects Section */}
                <section className="relative min-h-screen py-20">
                    <BlurCircle 
                        color="bg-cyan-500" 
                        position="top-1/4 right-0" 
                        size="w-72 h-72"
                        opacity="opacity-20"
                    />
                    <BlurCircle 
                        color="bg-purple-500" 
                        position="bottom-0 left-1/4" 
                        size="w-96 h-96"
                        opacity="opacity-20"
                    />
                    
                    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                        <Projects />
                    </div>
                </section>
            </main>
        </section>
    );
}