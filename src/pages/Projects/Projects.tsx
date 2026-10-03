import ProjectCard from "../../components/projects/project_card";
import ProjectsHero from "../../components/projects/project_hero";
import { projects } from "../../data/project_data";


const Projects = () => {
  return (
    <main className="bg-[#F7F5F0]">

      {/* PROJECT HERO */}
      <ProjectsHero />

      {/* PROJECT LIST */}
      <section
        id="project-list"
        className="py-20 sm:py-24 lg:py-32"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mb-12 max-w-2xl sm:mb-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#D89B35]">
              OUR PORTFOLIO
            </p>

            <h2 className="font-['Playfair_Display'] text-4xl font-medium leading-tight tracking-tight text-[#1F2426] sm:text-5xl lg:text-6xl">
              Spaces we've built
              <br />
              with purpose.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#6B7073] sm:text-base sm:leading-8">
              Explore our residential, villa, and commercial construction
              projects.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>

        </div>
      </section>

    </main>
  );
};

export default Projects;