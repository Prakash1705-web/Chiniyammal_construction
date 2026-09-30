const ContactHero = () => {
  return (
    <section
      className="
        relative
        flex
        min-h-[70vh]
        items-center
        overflow-hidden
        bg-[#1F2426]
        py-24
        sm:min-h-[65vh]
        sm:py-28
        md:min-h-[60vh]
        lg:min-h-[65vh]
        lg:py-32
        xl:min-h-[70vh]
      "
    >
      {/* Decorative Background */}
      <div
        className="
          absolute
          -right-32
          -top-32
          h-64
          w-64
          rounded-full
          bg-[#D89B35]/10
          blur-3xl
          sm:h-80
          sm:w-80
          lg:-right-40
          lg:-top-40
          lg:h-96
          lg:w-96
        "
      />

      <div
        className="
          absolute
          -bottom-32
          -left-32
          h-64
          w-64
          rounded-full
          bg-[#D89B35]/5
          blur-3xl
          sm:h-80
          sm:w-80
          lg:-bottom-40
          lg:-left-40
          lg:h-96
          lg:w-96
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-5
          sm:px-8
          md:px-10
          lg:px-12
          xl:px-10
        "
      >
        {/* Label */}
        <p
          className="
            mb-4
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.3em]
            text-[#D89B35]
            sm:mb-5
            sm:text-xs
            sm:tracking-[0.35em]
          "
        >
          GET IN TOUCH
        </p>

        {/* Heading */}
        <h1
          className="
            max-w-3xl
            text-4xl
            font-semibold
            leading-[1.05]
            tracking-tight
            text-white
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            xl:text-8xl
          "
        >
          Let's Build
          <br />
          <span className="text-[#D89B35]">
            Together.
          </span>
        </h1>

        {/* Description */}
        <p
          className="
            mt-5
            max-w-xs
            text-sm
            leading-6
            text-white/60
            sm:mt-6
            sm:max-w-md
            sm:text-base
            sm:leading-7
            md:text-lg
            md:leading-8
          "
        >
          Tell us about your next project.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;