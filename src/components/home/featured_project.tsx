import ProjectGrid from "../projects/project_grid";


const FeaturedProjects = () => {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

          <div>

            <p className="
              mb-3
              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#D89B35]
            ">
              OUR PROJECTS
            </p>

            <h2 className="
              text-4xl
              font-semibold
              leading-tight
              tracking-tight
              text-[#1F2426]
              sm:text-5xl
              lg:text-6xl
            ">
              Featured Projects
            </h2>

          </div>

          <p className="
            max-w-md
            text-sm
            leading-6
            text-[#6B7073]
            sm:text-base
          ">
            Explore some of the spaces we've designed
            and built with quality, precision and
            attention to detail.
          </p>

        </div>

        {/* Projects */}
        <ProjectGrid />

        {/* View All */}
        <div className="mt-12 flex justify-center sm:justify-start">

          <a
            href="/projects"
            className="
              inline-flex
              items-center
              border-b-2
              border-[#D89B35]
              pb-2
              text-sm
              font-semibold
              uppercase
              tracking-[0.15em]
              text-[#1F2426]
              transition-all
              duration-300
              hover:text-[#D89B35]
            "
          >
            VIEW ALL PROJECTS
          </a>

        </div>

      </div>

    </section>
  );
};

export default FeaturedProjects;