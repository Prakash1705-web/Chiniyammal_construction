const AboutIntro = () => {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-20">

          {/* Left Content */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#D89B35]">
              WHO WE ARE
            </p>

            <h2 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight text-[#1F2426] sm:text-5xl lg:text-6xl">
              Creating Spaces
              <br />
              That Matter.
            </h2>
          </div>

          {/* Right Content */}
          <div className="max-w-xl lg:ml-auto">

            <p className="text-base leading-8 text-[#6B7073] sm:text-lg">
              Chiniyamal Construction is committed to delivering thoughtfully
              designed residential and commercial spaces.
            </p>

            <p className="mt-6 text-base leading-8 text-[#6B7073] sm:text-lg">
              From planning and construction to finishing, our focus is on
              quality, reliability and customer satisfaction.
            </p>

            {/* Accent */}
            <div className="mt-8 h-px w-16 bg-[#D89B35]" />

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutIntro;