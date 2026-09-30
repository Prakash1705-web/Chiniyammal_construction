
import { projects } from "../../data/project_data";
import ProjectCard from "./project_card";


const ProjectGrid = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;