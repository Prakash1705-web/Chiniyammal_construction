import ServiceCard from "../../components/services/services_card";
import ServicesHero from "../../components/services/services_hero";


const Services = () => {
  return (
    <>
      {/* Hero */}
      <ServicesHero />

      {/* Services */}
      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

          {/* Section Heading */}
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#D89B35]">
              WHAT WE OFFER
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#1F2426] sm:text-5xl lg:text-6xl">
              Our Construction Services
            </h2>

            <p className="mt-5 text-base leading-7 text-[#6B7073] sm:text-lg sm:leading-8">
              We provide reliable construction and renovation solutions
              designed to meet the needs of modern homes and businesses.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <ServiceCard
              title="Residential Construction"
              description="Quality homes designed for modern living."
            />

            <ServiceCard
              title="Commercial Construction"
              description="Modern spaces built for growing businesses."
            />

            <ServiceCard
              title="Renovation"
              description="Transforming existing spaces with practical solutions."
            />

            <ServiceCard
              title="Interior Works"
              description="Thoughtfully designed interiors with attention to detail."
            />

          </div>

        </div>
      </section>
    </>
  );
};

export default Services;