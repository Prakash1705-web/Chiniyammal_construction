const ContactCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#1F2426] py-20 sm:py-24 lg:py-32">

      {/* Decorative Background */}
      <div className="
        absolute
        -right-32
        -top-32
        h-80
        w-80
        rounded-full
        bg-[#D89B35]/10
        blur-3xl
      " />

      <div className="
        absolute
        -bottom-32
        -left-32
        h-80
        w-80
        rounded-full
        bg-[#D89B35]/5
        blur-3xl
      " />

      {/* Content */}
      <div className="
        relative
        z-10
        mx-auto
        w-full
        max-w-7xl
        px-5
        text-center
        sm:px-8
        lg:px-10
      ">

        {/* Label */}
        <p className="
          mb-5
          text-xs
          font-semibold
          uppercase
          tracking-[0.35em]
          text-[#D89B35]
        ">
          START YOUR PROJECT
        </p>

        {/* Heading */}
        <h2 className="
          mx-auto
          max-w-4xl
          text-4xl
          font-semibold
          leading-tight
          tracking-tight
          text-white
          sm:text-5xl
          lg:text-6xl
        ">
          Let's Build Something
          <br className="hidden sm:block" />
          <span className="text-[#D89B35]">
            {" "}Great Together.
          </span>
        </h2>

        {/* Description */}
        <p className="
          mx-auto
          mt-6
          max-w-xl
          text-base
          leading-7
          text-white/60
          sm:text-lg
        ">
          Have a construction project in mind?
          Let's turn your vision into a space
          built to last.
        </p>

        {/* CTA */}
        <div className="mt-9 flex justify-center">

          <a
            href="/contact"
            className="
              inline-flex
              items-center
              justify-center
              bg-[#D89B35]
              px-8
              py-4
              text-sm
              font-semibold
              uppercase
              tracking-[0.15em]
              text-white
              transition-all
              duration-300
              hover:bg-[#BD8227]
              hover:shadow-lg
              hover:shadow-[#D89B35]/20
            "
          >
            GET IN TOUCH
          </a>

        </div>

      </div>

    </section>
  );
};

export default ContactCTA;