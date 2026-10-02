import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article
  className="
    group w-[320px] m-5 overflow-hidden rounded-2xl bg-white shadow-[0_10px_35px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.28)] lg:m-5 lg:w-[400px]  " >
      <a
        href={`/Chiniyammal_construction/projects/${project.id}`}
        className="block"
      >
        <div
          className="relative h-[280px] w-full overflow-hidden bg-[#EDEAE4] sm:h-[340px] lg:h- [380px]
          "
        >
          {/* Project Image */}
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform
              duration-700 ease-out group-hover:scale-[1.05] " /> 

          {/* Dark Gradient */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/65
              via-black/10
              to-transparent
            "
          />

          {/* =================================================
              CATEGORY
          ================================================= */}
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
              tracking-[0.16em]
              text-white
              shadow-md
              sm:left-6
              sm:top-6
            "
          >
            {project.category}
          </span>

          {/* =================================================
              VIEW PROJECT BUTTON
          ================================================= */}
          <div
            className="
              absolute
              bottom-5
              right-5
              flex
              h-11
              w-11
              translate-y-2
              items-center
              justify-center
              rounded-full
              bg-white
              text-[#1F2426]
              opacity-0
              shadow-lg
              transition-all
              duration-300
              group-hover:translate-y-0
              group-hover:opacity-100
              sm:bottom-6
              sm:right-6
            "
          >
            <ArrowUpRight
              size={19}
              strokeWidth={1.8}
            />
          </div>
        </div>

        {/* =====================================================
            PROJECT CONTENT
        ===================================================== */}
        <div className="p-5 sm:p-6">

          {/* Title + Arrow */}
          <div className="flex items-start justify-between gap-4">

            <h3
              className="
                min-h-[30px]
                max-w-[85%]
                font-['Playfair_Display']
                text-xl
                font-medium
                leading-tight
                tracking-[-0.01em]
                text-[#1F2426]
                transition-colors
                duration-300
                group-hover:text-[#D89B35]
                sm:text-2xl
              "
            >
              {project.title}
            </h3>

            {/* Small Arrow */}
            <ArrowUpRight
              size={19}
              strokeWidth={1.5}
              className="
                mt-1
                shrink-0
                text-[#6B7073]
                transition-all
                duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
                group-hover:text-[#D89B35]
              "
            />

          </div>

          {/* Location */}
          <p
            className="
              mt-2
              min-h-[24px]
              text-sm
              leading-6
              text-[#6B7073]
            "
          >
            {project.location}
          </p>

          {/* Divider */}
          <div
            className="
              mt-5
              h-px
              w-full
              bg-[#E5E2DC]
              transition-colors
              duration-300
              group-hover:bg-[#D89B35]/40
            "
          />

          {/* Bottom Card Meta */}
          <div className="mt-4 flex items-center justify-between">

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#8A8F91]
              "
            >
              View Project
            </span>

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.15em]
                text-[#D89B35]
              "
            >
              {project.category}
            </span>

          </div>

        </div>

      </a>
    </article>
  );
};

export default ProjectCard;