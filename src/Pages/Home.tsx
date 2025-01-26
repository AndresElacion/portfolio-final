import WelcomeLayout from "../Components/WelcomeLayout"

export default function Home() {
    return (
        <div>
            <WelcomeLayout />
            <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Welcome to Vite + React + Tailwind CSS</h1>
                    <p className="mt-5 text-lg">Get started by editing the files in <code>src/</code></p>
                </div>
            </div>
        </div>
    );
}