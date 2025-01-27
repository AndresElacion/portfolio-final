import { skillsData } from '../data/skills';

export default function Skills() {
    return (
        <section id="skills" className="px-4 py-16">
            <div className="text-center pt-8 mb-12 border-t border-gray-200 dark:border-gray-800">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-gray-200">
                    Skills & Technologies
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    My technical toolkit and expertise that I bring to every project
                </p>
            </div>

            <div className="grid gap-8 border-b border-gray-200 dark:border-gray-800 py-8">
                {skillsData.map((category, index) => (
                    <div key={index} className="space-y-4">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {category.skills.map((skill, skillIndex) => (
                                <div 
                                    key={skillIndex}
                                    className="group relative p-6 rounded-xl bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm border border-gray-200/10 hover:border-blue-500/50 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-500/10"
                                >
                                    <div className="flex flex-col items-center space-y-3">
                                        <div className="relative w-12 h-12 flex items-center justify-center group-hover:transform group-hover:scale-110 transition-transform duration-300">
                                            <img 
                                                src={skill.icon} 
                                                alt={skill.name}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <span className="text-sm font-medium text-gray-700 
                                                       dark:text-gray-300 text-center">
                                            {skill.name}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}