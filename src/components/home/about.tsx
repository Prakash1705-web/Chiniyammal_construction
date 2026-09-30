const AboutPreview = () => {
  return (
    <section className="bg-[#F7F5F0] py-20 sm:py-24 lg:py-32">

      <div className="
        mx-auto
        grid
        w-full
        max-w-7xl
        gap-10
        px-5
        sm:px-8
        lg:grid-cols-2
        lg:items-center
        lg:gap-20
        lg:px-10
      ">

        {/* Left Content */}
        <div>

          <p className="
            mb-4
            text-xs
            font-semibold
            uppercase
            tracking-[0.35em]
            text-[#D89B35]
          ">
            ABOUT US
          </p>

          <h2 className="
            max-w-xl
            text-4xl
            font-semibold
            leading-[1.05]
            tracking-tight
            text-[#1F2426]
            sm:text-5xl
            lg:text-6xl
          ">
            Building Spaces.
            <br />
            Creating Futures.
          </h2>

        </div>

        {/* Right Content */}
        <div className="max-w-xl lg:ml-auto">

          <p className="
            text-base
            leading-8
            text-[#6B7073]
            sm:text-lg
          ">
            Chiniyamal Construction focuses on
            creating thoughtfully designed spaces
            with quality construction and modern
            architectural standards.
          </p>

          <a
            href="/about"
            className="
              mt-8
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
            KNOW MORE
          </a>

        </div>

      </div>

    </section>
  );
};

export default AboutPreview;