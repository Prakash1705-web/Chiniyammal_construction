const ProjectsHero = () => {
  return (
    <section
      className="
        relative
        isolate
        min-h-[520px]
        overflow-hidden
        bg-[#1F2426]
        sm:min-h-[600px]
        lg:min-h-[680px]
      "
    >
      {/* =====================================================
          BACKGROUND CONSTRUCTION IMAGE
      ===================================================== */}
      <img
        src="images/Resident.png"
        alt="Chiniyamal Construction projects"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
          animate-projects-image
        "
      />

      {/* =====================================================
          DARK GRADIENT OVERLAY
      ===================================================== */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#111518]
          via-[#111518]/85
          to-[#111518]/20
        "
      />

      {/* =====================================================
          SECONDARY DARK OVERLAY
      ===================================================== */}
      <div className="absolute inset-0 bg-black/20" />

      {/* =====================================================
          GOLD DECORATIVE GLOW
      ===================================================== */}
      <div
        className="
          absolute
          -right-32
          -top-32
          h-80
          w-80
          rounded-full
          bg-[#D89B35]/10
          blur-3xl
          animate-projects-glow
        "
      />

      <div
        className="
          absolute
          -bottom-32
          -left-32
          h-80
          w-80
          rounded-full
          bg-[#D89B35]/10
          blur-3xl
          animate-projects-glow
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}
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
          px-5
          py-28
          sm:min-h-[600px]
          sm:px-8
          sm:py-32
          lg:min-h-[680px]
          lg:px-10
          lg:py-40
        "
      >
        <div className="max-w-3xl">

          {/* =================================================
              LABEL
          ================================================= */}
          <p
            className="
              mb-5
              text-xs
              font-semibold
              uppercase
              tracking-[0.35em]
              text-[#D89B35]
              animate-projects-content
              sm:text-sm
              sm:tracking-[0.4em]
            "
            style={{
              animationDelay: "150ms",
            }}
          >
            OUR WORK
          </p>

          {/* =================================================
              TITLE
          ================================================= */}
          <h1
            className="
              max-w-3xl
              font-['Playfair_Display']
              text-5xl
              font-medium
              leading-[0.95]
              tracking-[-0.03em]
              text-white
              drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]
              animate-projects-content
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
            style={{
              animationDelay: "300ms",
            }}
          >
            Our Projects
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}
          <p
            className="
              mt-6
              max-w-xl
              text-sm
              leading-7
              text-white/75
              animate-projects-content
              sm:mt-7
              sm:text-base
              sm:leading-8
              lg:text-lg
            "
            style={{
              animationDelay: "450ms",
            }}
          >
            Explore spaces designed and built by Chiniyamal Construction.
          </p>

          {/* =================================================
              DECORATIVE LINE
          ================================================= */}
          <div
            className="
              mt-8
              flex
              items-center
              gap-4
              animate-projects-content
            "
            style={{
              animationDelay: "600ms",
            }}
          >
            <div className="h-px w-16 bg-[#D89B35]" />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-white/50
              "
            >
              BUILT WITH PURPOSE
            </span>
          </div>

        </div>
      </div>

      {/* =====================================================
          BOTTOM FADE
      ===================================================== */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-24
          bg-gradient-to-t
          from-[#1F2426]
          to-transparent
        "
      />

      {/* =====================================================
          LOCAL ANIMATION STYLES
      ===================================================== */}
      <style>{`
        @keyframes projectsContentUp {
          from {
            opacity: 0;
            transform: translateY(45px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes projectsImageUp {
          from {
            opacity: 0;
            transform: scale(1.06) translateY(25px);
          }

          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes projectsGlowUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-projects-content {
          opacity: 0;
          animation: projectsContentUp 800ms
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .animate-projects-image {
          opacity: 0;
          animation: projectsImageUp 1200ms
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .animate-projects-glow {
          opacity: 0;
          animation: projectsGlowUp 1200ms
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
          animation-delay: 250ms;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-projects-content,
          .animate-projects-image,
          .animate-projects-glow {
            opacity: 1;
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsHero;