import { BlurCircle } from "../Components/BlurCircle";
import WelcomeLayout from "../Components/WelcomeLayout"
import Skills from "./Skills"

export default function Home() {
    return (
        <div>
            <WelcomeLayout />
            <main className="relative min-h-screen bg-gray-100 dark:bg-gray-900 overflow-hidden">
                <div className="relative flex flex-col items-center justify-center min-h-screen pt-20">
                    {/* Decorative blur circles */}
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
                        <BlurCircle 
                            color="bg-cyan-500" 
                            position="bottom-0 left-1/4" 
                            size="w-72 h-72"
                            opacity="opacity-20"
                        />
                    
                    <div className="relative text-center">
                        <h1 className="text-6xl font-bold dark:text-gray-300">Andres Elacion III</h1>
                        <p className="mt-5 text-lg dark:text-gray-300 max-w-7xl">
                            <code className="mb-5 block">
                                A Full Stack Web Developer from the Philippines, crafting stunning, user-friendly websites and web apps, with expertise in deploying on AWS EC2 and GCP, setting up SSL certificates, and fueling creativity through guitar and online gaming.
                            </code>
                        </p>

                        <div className="flex justify-center space-x-5 mt-10">
                            <a href="#" className="px-8 py-3 bg-transparent text-gray-800 border rounded-md shadow-lg dark:bg-transparent dark:text-white hover:bg-blue-400 hover:border-none">
                            Contact me
                            </a>

                            <a href="#" className="px-8 py-3 bg-transparent text-gray-800 border rounded-md shadow-lg dark:bg-transparent dark:text-white hover:bg-blue-400 hover:border-none">
                                Download CV
                            </a>
                        </div>
                    </div>

                    {/* Skills */}
                    <Skills />
                </div>
            </main>
        </div>
    );
}