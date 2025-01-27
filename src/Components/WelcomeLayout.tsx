import { Link, Outlet } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { GitHubIcon } from "./GithubIcon";
import { useActiveSection } from "../hooks/useActiveSection";
export default function WelcomeLayout() {
	const activeSection = useActiveSection()

	const navItems = [
		{
			id: 'hero',
			title: 'Home',
		},
		{
			id: 'skills',
			title: 'Skills',
		},
		{
			id: 'projects',
			title: 'Projects',
		},
		{
			id: 'contact',
			title: 'Contact',
		},
	]
	return (
		<div>
			{/* Main Nav */}
			<div className="fixed top-0 left-0 w-full bg-transparent dark:bg-transparent backdrop-blur-md shadow-md z-50">
				<div className="flex container max-w-7xl mx-auto items-center justify-between p-4 dark:text-gray-300">
					<Link to="/" className="text-md font-bold"><code className="text-2xl">ciondev</code></Link>
					<nav className="space-x-3 flex">
						{navItems.map((item) =>
							<a
								key={item.id}
								href={`#${item.id}`}
								className={`hover:text-blue-600 ${activeSection === item.id ? 'text-blue-600' : ''}`}>
								{item.title}
							</a>
						)}
						
						{/* DarkMode */}
						<div className="border-r-2 border-gray-200 pr-2">
							<ThemeToggle />
						</div>

						<div>
							<a 
								href="https://github.com/AndresElacion" 
								target="_blank" 
								rel="noopener noreferrer"
								className="hover:text-blue-600"
							>
								<GitHubIcon size={20} />
							</a>
						</div>
					</nav>
				</div>
			</div>

			{/* Sidebar and Content */}
			<div className="flex items-center justify-center">

				{/* Main Content */}
				<div
					className="flex-grow transition-all dark:bg-gray-900 bg-gray-100"
				>
					{/* Outlet for nested routes */}
					<Outlet />
				</div>
			</div>
		</div>
	);
}

