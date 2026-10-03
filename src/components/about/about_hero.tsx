const AboutHero = () => {
  return (
    <section
      className="
        relative
        m-0
        min-h-[520px]
        overflow-hidden
        bg-[#1F2426]
        sm:min-h-[580px]
        lg:min-h-[650px]
      "
    >
      {/* Background overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#111416]
          via-[#111416]/100
          to-[#111416]/30
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[520px]
          w-full
          max-w-7xl
          items-center
          px-6
          py-24
          sm:min-h-[580px]
          sm:px-10
          lg:min-h-[650px]
          lg:px-12
        "
      >
        <div className="max-w-3xl">

          {/* Section Label */}
          <p
            className="
              animate-about-up
              mb-5
              text-xs
              font-semibold
              uppercase
              tracking-[0.35em]
              text-[#D89B35]
              sm:text-sm
              sm:tracking-[0.4em]
            "
            style={{ animationDelay: "150ms" }}
          >
            ABOUT CHINIYAMAL
          </p>

          {/* Heading */}
          <h1
            className="
              animate-about-up
              font-['Playfair_Display']
              text-5xl
              font-medium
              leading-[0.95]
              tracking-[-0.03em]
              text-white
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
            style={{ animationDelay: "300ms" }}
          >
            Building With
            <br />
            Purpose.
          </h1>

          {/* Description */}
          <p
            className="
              animate-about-up
              mt-6
              max-w-xl
              text-sm
              leading-7
              text-white
              sm:mt-7
              sm:text-base
              sm:leading-8
              lg:text-lg
            "
            style={{ animationDelay: "450ms" }}
          >
            Quality construction backed by trust and commitment.
          </p>

          {/* Decorative line */}
          <div
            className="
              animate-about-up
              mt-8
              flex
              items-center
              gap-4
            "
            style={{ animationDelay: "600ms" }}
          >
            <div className="h-px w-16 bg-[#D89B35]" />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-white
              "
            >
              BUILT WITH PURPOSE
            </span>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-20
          bg-gradient-to-t
          from-[#F7F5F0]
          to-transparent
        "
      />

      {/* Animation */}
      <style>{`
        @keyframes aboutContentUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-about-up {
          opacity: 0;
          animation: aboutContentUp 850ms
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-about-up {
            opacity: 1;
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutHero;