const WhyChooseUs = () => {
  const reasons = [
    {
      number: "01",
      title: "Attention to Detail",
    },
    {
      number: "02",
      title: "Quality-Focused Execution",
    },
    {
      number: "03",
      title: "Modern Construction Approach",
    },
    {
      number: "04",
      title: "Customer-Focused Service",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mb-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#D89B35]">
            WHY CHOOSE US
          </p>

          <h2 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight text-[#1F2426] sm:text-5xl lg:text-6xl">
            Built Around Your
            <br />
            <span className="text-[#D89B35]">
              Vision.
            </span>
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid gap-px overflow-hidden border border-[#E5E2DC] bg-[#E5E2DC] sm:grid-cols-2 lg:grid-cols-4">

          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="
                group
                bg-white
                p-7
                transition-all
                duration-300
                hover:bg-[#F7F5F0]
                sm:p-8
                lg:p-10
              "
            >
              {/* Number */}
              <span
                className="
                  text-xs
                  font-semibold
                  tracking-[0.2em]
                  text-[#D89B35]
                "
              >
                {reason.number}
              </span>

              {/* Title */}
              <h3
                className="
                  mt-12
                  max-w-[180px]
                  text-lg
                  font-semibold
                  leading-6
                  text-[#1F2426]
                  transition-colors
                  duration-300
                  group-hover:text-[#D89B35]
                  sm:text-xl
                "
              >
                {reason.title}
              </h3>

              {/* Accent */}
              <div
                className="
                  mt-8
                  h-px
                  w-8
                  bg-[#D89B35]
                  transition-all
                  duration-300
                  group-hover:w-16
                "
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;