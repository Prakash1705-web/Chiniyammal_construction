const ProjectsHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#1F2426] py-28 sm:py-32 lg:py-40">

      {/* Decorative Background */}
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#D89B35]/10 blur-3xl" />

      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#D89B35]/5 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#D89B35]">
          OUR WORK
        </p>

        <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Our Projects
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
          Explore spaces designed and built by Chiniyamal Construction.
        </p>

      </div>

    </section>
  );
};

export default ProjectsHero;