import { ProjectCard } from "./components/ProjectCard";
import { ThemeToggle } from "./components/ThemeToggle";
import projectsData from "./data/projects.json";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-950 p-6 md:p-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              MITS Project Dashboard
            </h1>
            <p className="text-gray-600 dark:text-slate-400 mt-1">
              Explore our collection of skills training projects
            </p>
          </div>
          <ThemeToggle />
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              onClick={() => console.log(`${project.title} clicked!`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
