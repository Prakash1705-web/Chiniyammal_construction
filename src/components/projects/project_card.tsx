import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../types/project";


interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="group overflow-hidden bg-white">

      <a href={`/projects/${project.id}`}>

        {/* Project Image */}
        <div className="relative aspect-[4/3] overflow-hidden">

          <img
            src={project.image}
            alt={project.title}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />

          {/* Category */}
          <span
            className="
              absolute
              left-5
              top-5
              bg-[#D89B35]
              px-3
              py-2
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-white
            "
          >
            {project.category}
          </span>

          {/* View Icon */}
          <div
            className="
              absolute
              bottom-5
              right-5
              flex
              h-11
              w-11
              items-center
              justify-center
              bg-white
              text-[#1F2426]
              opacity-0
              transition-all
              duration-300
              group-hover:opacity-100
            "
          >
            <ArrowUpRight size={19} />
          </div>

        </div>

        {/* Project Content */}
        <div className="pt-5">

          <h3
            className="
              text-xl
              font-semibold
              tracking-tight
              text-[#1F2426]
              transition-colors
              duration-300
              group-hover:text-[#D89B35]
            "
          >
            {project.title}
          </h3>

          <p className="mt-2 text-sm text-[#6B7073]">
            {project.location}
          </p>

        </div>

      </a>

    </article>
  );
};

export default ProjectCard;