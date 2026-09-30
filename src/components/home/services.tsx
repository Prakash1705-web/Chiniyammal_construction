import { Building2, Home, Hammer } from "lucide-react";

const ServicesPreview = () => {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#D89B35]">
              WHAT WE DO
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#1F2426] sm:text-5xl lg:text-6xl">
              Our Services
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#6B7073] sm:text-base">
            From new construction to renovation, we create spaces that combine
            quality, functionality, and modern design.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid gap-5 md:grid-cols-3">

          {/* Residential */}
          <div
            className="
              group
              border
              border-[#E5E2DC]
              bg-[#F7F5F0]
              p-8
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#D89B35]
              hover:shadow-xl
              hover:shadow-black/5
              sm:p-10
            "
          >
            <Home
              size={32}
              strokeWidth={1.5}
              className="text-[#D89B35] transition-transform duration-300 group-hover:scale-110"
            />

            <h3 className="mt-8 text-xl font-semibold text-[#1F2426]">
              Residential Construction
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#6B7073]">
              Quality homes designed around modern lifestyles, comfort, and
              long-term living.
            </p>

            <div className="mt-8 h-px w-10 bg-[#D89B35] transition-all duration-300 group-hover:w-20" />
          </div>

          {/* Commercial */}
          <div
            className="
              group
              border
              border-[#E5E2DC]
              bg-[#F7F5F0]
              p-8
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#D89B35]
              hover:shadow-xl
              hover:shadow-black/5
              sm:p-10
            "
          >
            <Building2
              size={32}
              strokeWidth={1.5}
              className="text-[#D89B35] transition-transform duration-300 group-hover:scale-110"
            />

            <h3 className="mt-8 text-xl font-semibold text-[#1F2426]">
              Commercial Construction
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#6B7073]">
              Functional commercial spaces built for modern businesses,
              productivity, and growth.
            </p>

            <div className="mt-8 h-px w-10 bg-[#D89B35] transition-all duration-300 group-hover:w-20" />
          </div>

          {/* Renovation */}
          <div
            className="
              group
              border
              border-[#E5E2DC]
              bg-[#F7F5F0]
              p-8
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#D89B35]
              hover:shadow-xl
              hover:shadow-black/5
              sm:p-10
            "
          >
            <Hammer
              size={32}
              strokeWidth={1.5}
              className="text-[#D89B35] transition-transform duration-300 group-hover:scale-110"
            />

            <h3 className="mt-8 text-xl font-semibold text-[#1F2426]">
              Renovation
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#6B7073]">
              Transforming existing spaces with modern solutions, improved
              functionality, and thoughtful design.
            </p>

            <div className="mt-8 h-px w-10 bg-[#D89B35] transition-all duration-300 group-hover:w-20" />
          </div>

        </div>

      </div>

    </section>
  );
};

export default ServicesPreview;