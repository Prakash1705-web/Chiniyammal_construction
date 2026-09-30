const CompanyValues = () => {
  const values = [
    {
      title: "Quality",
      description:
        "We focus on quality materials and reliable construction practices.",
    },
    {
      title: "Trust",
      description:
        "We believe strong relationships are built through transparency.",
    },
    {
      title: "Innovation",
      description:
        "We embrace modern ideas and practical design solutions.",
    },
  ];

  return (
    <section className="bg-[#F7F5F0] py-20 sm:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <div className="mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#D89B35]">
            OUR VALUES
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#1F2426] sm:text-5xl lg:text-6xl">
            What We Stand For
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid gap-5 md:grid-cols-3">

          {values.map((value, index) => (
            <article
              key={value.title}
              className="
                group
                relative
                border
                border-[#E5E2DC]
                bg-white
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
              {/* Number */}
              <span
                className="
                  text-xs
                  font-semibold
                  tracking-[0.2em]
                  text-[#D89B35]/60
                  transition-colors
                  duration-300
                  group-hover:text-[#D89B35]
                "
              >
                0{index + 1}
              </span>

              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-[#1F2426] transition-colors duration-300 group-hover:text-[#D89B35]">
                {value.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#6B7073] sm:text-base">
                {value.description}
              </p>

              {/* Bottom Accent */}
              <div className="mt-8 h-px w-10 bg-[#D89B35] transition-all duration-300 group-hover:w-20" />
            </article>
          ))}

        </div>
      </div>
    </section>
  );
};

export default CompanyValues;