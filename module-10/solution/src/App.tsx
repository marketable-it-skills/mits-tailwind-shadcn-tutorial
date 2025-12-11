import { ProjectCard } from "./components/ProjectCard";
import { ThemeToggle } from "./components/ThemeToggle";
import collectionData from "./data/collection.json";
import { transformProjects } from "./utils/transformData";
import type { RawProject } from "./types/project";

function App() {
  // Transform the raw data to UI format
  const projects = transformProjects(collectionData as RawProject[]);

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
              Explore our collection of {projects.length} skills training projects
            </p>
          </div>
          <ThemeToggle />
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              onClick={() => {
                console.log(`${project.title} clicked!`);
                // In a real app, you might navigate to the project URL
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
