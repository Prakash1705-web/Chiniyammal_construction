
import ProjectGrid from "../../components/projects/project_grid";
import ProjectsHero from "../../components/projects/project_hero";


const Projects = () => {
  return (
    <>
      <ProjectsHero />

      <section className="projects-section">

        <div className="section-container">

          <ProjectGrid />

        </div>

      </section>
    </>
  );
};

export default Projects;