import { projectsData } from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
    return (
        <section id="projects" className="px-4 py-16 min-h-screen bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white 
                                 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text">
                        Featured Projects
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                        Explore my latest work and personal projects that showcase my skills and passion for development
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-0">
                    {projectsData[0].projects.map((project, index) => (
                        <div 
                            key={index}
                            className="group relative rounded-xl bg-white dark:bg-gray-800 
                                     border border-gray-200/10 hover:border-blue-500/50 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-500/10"
                        >
                            {/* Project Image with Overlay */}
                            <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-xl">
                                <img 
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 
                                             transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent 
                                              opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-white text-xl font-bold truncate">{project.name}</h3>
                                        <p className="text-gray-200 text-sm line-clamp-2">{project.description}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white truncate">
                                    {project.name}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.stack.split(', ').map((tech, techIndex) => (
                                        <span 
                                            key={techIndex}
                                            className="px-3 py-1 text-xs rounded-full bg-blue-100/80 
                                                     dark:bg-blue-900/30 text-blue-700 dark:text-blue-300
                                                     font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4 mt-auto">
                                    {project.url.includes('github') ? (
                                        <a 
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium
                                                     text-gray-700 dark:text-gray-300 hover:text-blue-600 
                                                     dark:hover:text-blue-400 transition-colors"
                                        >
                                            <FaGithub className="text-lg" /> Source Code
                                        </a>
                                    ) : project.url && (
                                        <a 
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium
                                                     text-gray-700 dark:text-gray-300 hover:text-blue-600 
                                                     dark:hover:text-blue-400 transition-colors"
                                        >
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}