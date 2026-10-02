import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../../data/project_data";



interface ProjectInfoProps {
  projectId?: string;
}

const ProjectInfo = ({ projectId }: ProjectInfoProps) => {
  const project = projects.find(
    (item) => item.id === Number(projectId)
  );

  if (!project) {
    return (
      <section className="flex min-h-[60vh] items-center bg-[#F7F5F0]">
        <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#D89B35]">
            PROJECT
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-[#1F2426] sm:text-5xl">
            Project Not Found
          </h1>

          <p className="mt-4 max-w-lg text-base leading-7 text-[#6B7073]">
            The requested project could not be found.
          </p>

          <Link
            to="/Chiniyammal_construction/projects"
            className="mt-8 inline-flex border-b-2 border-[#D89B35] pb-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#1F2426] transition-colors duration-300 hover:text-[#D89B35]"
          >
            BACK TO PROJECTS
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-20 lg:px-10">

        {/* Project Image */}
        <div className="overflow-hidden mt-5">
        <img
          src={project.image}
          alt={project.title}
          className="
            h-full
            min-h-[350px]
            w-full
            object-cover
            sm:min-h-[500px]
            lg:min-h-[600px]
          "
        />
        </div>

        {/* Project Details */}
        <div className="lg:pt-8">

          <span className="inline-flex bg-[#D89B35] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
            {project.category}
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-[#1F2426] sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          {/* Location */}
          <div className="mt-6 flex items-center gap-2 text-sm text-[#6B7073]">
            <MapPin size={17} className="text-[#D89B35]" />

            <span>{project.location}</span>
          </div>

          {/* Divider */}
          <div className="my-8 h-px w-full bg-[#E5E2DC]" />

          {/* Description */}
          <p className="text-base leading-8 text-[#6B7073] sm:text-lg">
            {project.description}
          </p>

          {/* Back Button */}
          <Link
            to="/Chiniyammal_construction/projects"
            className="mt-10 inline-flex items-center border-b-2 border-[#D89B35] pb-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#1F2426] transition-colors duration-300 hover:text-[#D89B35]"
          >
            BACK TO PROJECTS
          </Link>

        </div>

      </div>
    </section>
  );
};

export default ProjectInfo;