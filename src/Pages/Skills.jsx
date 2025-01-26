import { skillsData } from '../data/skills';

export default function Skills() {
    return (
        <div className="mt-16">
            {skillsData.map((category) => (
                <div 
                    className="p-6 rounded-xl backdrop-blur-sm 
                             bg-white/10 dark:bg-gray-800/30 
                             hover:shadow-xl transition-all duration-300"
                >
                    <div className="flex gap-4">
                        {category.skills.map((skill) => (
                            <div className='flex flex-col p-4 rounded-xl backdrop-blur-sm bg-white/10 dark:bg-gray-800/30 hover:shadow-xl transition-all duration-300
                                         hover:transform hover:scale-105'>
                                <div
                                    className="flex flex-col items-center justify-center w-20 h-20">
                                    <img 
                                        src={skill.icon} 
                                        alt={skill.name}
                                        className="w-12 h-12 mb-2"
                                    />
                                    <span className="text-sm dark:text-gray-300">
                                        {skill.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}