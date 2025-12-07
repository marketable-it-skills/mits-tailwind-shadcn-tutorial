import { ProjectCard } from "./components/ProjectCard";
import projectsData from "./data/projects.json";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
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
