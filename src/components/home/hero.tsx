import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

type Phase = "closed" | "opening" | "done";

const EASE = "cubic-bezier(0.77, 0, 0.175, 1)";

/* =========================================================
   HELPERS
========================================================= */

const clamp = (
  value: number,
  min: number,
  max: number
) => {
  return Math.min(Math.max(value, min), max);
};

/* =========================================================
   DOOR LEAF
========================================================= */

const DoorLeaf = ({
  side,
  progress,
  reduce,
}: {
  side: "left" | "right";
  progress: number;
  reduce: boolean;
}) => {
  const isLeft = side === "left";

  /*
    Door starts opening after 35% scroll.

    0%  → closed
    35% → still closed
    35%-85% → opening
    85% → fully open
  */

  const doorProgress = clamp(
    (progress - 0.35) / 0.5,
    0,
    1
  );

  const rotation = isLeft
    ? -100 * doorProgress
    : 100 * doorProgress;

  return (
    <div
      className={`
        absolute
        inset-y-0
        w-1/2
        overflow-hidden
        ${
          isLeft
            ? "left-0 border-r"
            : "right-0 border-l"
        }
        border-black/70
      `}
      style={{
        transformOrigin: isLeft
          ? "left center"
          : "right center",

        transform: reduce
          ? "rotateY(0deg)"
          : `rotateY(${rotation}deg)`,

        opacity: reduce && progress > 0.35 ? 0 : 1,

        transition: reduce
          ? "opacity 0.3s ease"
          : "transform 60ms linear",

        backfaceVisibility: "hidden",

        background: isLeft
          ? `
            linear-gradient(
              90deg,
              #211108 0%,
              #4b2913 35%,
              #6d3d1b 65%,
              #32180b 100%
            )
          `
          : `
            linear-gradient(
              270deg,
              #211108 0%,
              #4b2913 35%,
              #6d3d1b 65%,
              #32180b 100%
            )
          `,

        boxShadow: isLeft
          ? "15px 0 45px rgba(0,0,0,.7)"
          : "-15px 0 45px rgba(0,0,0,.7)",

        transformStyle: "preserve-3d",

        willChange: "transform",
      }}
    >

      {/* =====================================================
          WOOD GRAIN
      ===================================================== */}

      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              rgba(255,220,170,.07) 0 2px,
              transparent 3px 11px
            ),
            repeating-linear-gradient(
              0deg,
              rgba(0,0,0,.12) 0 1px,
              transparent 2px 55px
            )
          `,
        }}
      />

      {/* =====================================================
          WOOD LIGHTING
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-white/[0.06]
          via-transparent
          to-black/30
        "
      />

      {/* =====================================================
          DOOR PANELS
      ===================================================== */}

      <div
        className="
          absolute
          inset-[5%]
          grid
          grid-rows-[1fr_1.4fr]
          gap-[4%]
        "
      >

        {/* Upper Panel */}

        <div
          className="
            border
            border-[#c18b54]/30
            bg-black/[0.08]
            shadow-[inset_0_0_35px_rgba(0,0,0,.55)]
          "
        >
          <div
            className="
              m-[7%]
              h-[86%]
              border
              border-[#d3a16b]/20
            "
          />
        </div>

        {/* Lower Panel */}

        <div
          className="
            border
            border-[#c18b54]/30
            bg-black/[0.08]
            shadow-[inset_0_0_35px_rgba(0,0,0,.55)]
          "
        >
          <div
            className="
              m-[7%]
              h-[86%]
              border
              border-[#d3a16b]/20
            "
          />
        </div>

      </div>

      {/* =====================================================
          CENTER EDGE SHADOW
      ===================================================== */}

      <div
        className={`
          absolute
          inset-y-0
          w-24
          ${
            isLeft
              ? "right-0 bg-gradient-to-l"
              : "left-0 bg-gradient-to-r"
          }
          from-black/50
          to-transparent
        `}
      />

      {/* =====================================================
          BRASS HANDLE
      ===================================================== */}

      <div
        className={`
          absolute
          top-1/2
          -translate-y-1/2
          ${
            isLeft
              ? "right-[5%]"
              : "left-[5%]"
          }
        `}
      >

        <div
          className="
            h-28
            w-4
            rounded-full
            bg-gradient-to-r
            from-[#513315]
            via-[#e0b56c]
            to-[#69441f]
            shadow-[3px_3px_12px_rgba(0,0,0,.7)]
            sm:h-36
            sm:w-5
          "
        />

        <div
          className="
            absolute
            -left-1
            top-1
            h-4
            w-6
            rounded-full
            bg-[#c89555]
          "
        />

        <div
          className="
            absolute
            -left-1
            bottom-1
            h-4
            w-6
            rounded-full
            bg-[#c89555]
          "
        />

      </div>

    </div>
  );
};

/* =========================================================
   HERO
========================================================= */

const Hero = () => {

  const heroRef = useRef<HTMLElement | null>(null);

  const [scrollProgress, setScrollProgress] =
    useState(0);

  const [phase, setPhase] =
    useState<Phase>("closed");

  const [reduce, setReduce] =
    useState(false);

  /* =======================================================
     REDUCED MOTION
  ======================================================= */

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const update = () => {
      setReduce(mediaQuery.matches);
    };

    update();

    mediaQuery.addEventListener(
      "change",
      update
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        update
      );
    };
  }, []);

  /* =======================================================
     SCROLL CONTROL
  ======================================================= */

  useEffect(() => {

    let animationFrame = 0;

    const handleScroll = () => {

      if (!heroRef.current) return;

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

      animationFrame = requestAnimationFrame(() => {

        const section =
          heroRef.current;

        if (!section) return;

        const rect =
          section.getBoundingClientRect();

        /*
          Hero section is taller than viewport.

          When:
          rect.top = 0
          → progress = 0

          When:
          hero section is almost completely
          scrolled through
          → progress = 1
        */

        const scrollableHeight =
          section.offsetHeight -
          window.innerHeight;

        const currentScroll =
          -rect.top;

        const progress =
          scrollableHeight > 0
            ? clamp(
                currentScroll /
                  scrollableHeight,
                0,
                1
              )
            : 0;

        setScrollProgress(progress);

        /*
          PHASE
        */

        if (progress < 0.35) {
          setPhase("closed");
        } else if (progress < 0.9) {
          setPhase("opening");
        } else {
          setPhase("done");
        }

      });
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    handleScroll();

    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

      if (animationFrame) {
        cancelAnimationFrame(
          animationFrame
        );
      }

    };

  }, []);

  /* =======================================================
     DOOR VALUES
  ======================================================= */

  /*
    Door zoom.

    Start:
    1.00

    End:
    1.18
  */

  const doorScale = reduce
    ? 1
    : 1 + scrollProgress * 0.18;

  /*
    Background brightness.

    Closed:
    dark

    Opening:
    brighter

    Open:
    fully visible
  */

  const backgroundBrightness =
    0.18 +
    scrollProgress * 0.67;

  /*
    Branding disappears while door opens.
  */

  const brandingOpacity =
    clamp(
      1 - scrollProgress / 0.45,
      0,
      1
    );

  /*
    Normal hero content appears
    near the end of the door animation.
  */

  const heroContentOpacity =
    clamp(
      (scrollProgress - 0.75) / 0.25,
      0,
      1
    );

  return (

    /*
      IMPORTANT:

      280vh gives the user enough
      scroll distance to control
      the entire entrance animation.
    */

    <section
      ref={heroRef}
      className="
        relative
        h-[280vh]
        bg-[#111]
      "
    >

      {/* =====================================================
          STICKY HERO VIEWPORT
      ===================================================== */}

      <div
        className="
          sticky
          top-0
          h-screen
          overflow-hidden
        "
      >

        {/* =====================================================
            PARKING AREA / HOUSE BACKGROUND
        ===================================================== */}

        <img
          src="/images/Car_Park.png"
          alt="Chiniyamal Construction home entrance"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
         style={{
  transform:
    `scale(${1 + scrollProgress * 0.49})`,

  filter: `
    brightness(${backgroundBrightness})
    blur(${imageBlur ? 6 : 0}px)
  `,

  transition:
    "transform 80ms linear, filter 700ms ease",

  willChange:
    "transform, filter",
}}
        />

        {/* =====================================================
            DARK HERO OVERLAY
        ===================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-black/35
          "
          style={{
            opacity:
              1 -
              heroContentOpacity * 0.45,
          }}
        />

        {/* =====================================================
            NORMAL HERO CONTENT
        ===================================================== */}

        <div
          className="
            absolute
            inset-0
            z-10
            flex
            items-center
          "
          style={{
            opacity:
              heroContentOpacity,

            transform:
              `translateY(${24 -
                heroContentOpacity * 24}px)`,

            transition:
              "opacity 100ms linear, transform 100ms linear",
          }}
        >

          <div
            className="
              mx-auto
              w-full
              max-w-7xl
              px-5
              pt-20
              sm:px-8
              md:px-10
            "
          >

            <div className="max-w-3xl">

              {/* Small Heading */}

              <p
                className="
                  mb-5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#D89B35]
                  sm:text-sm
                  sm:tracking-[0.35em]
                "
              >
                BUILDING YOUR FUTURE
              </p>

              {/* Main Heading */}

              <h1
  className="
    font-['Playfair_Display']
    text-5xl
    font-medium
    uppercase
    leading-[0.9]
    tracking-[-0.03em]
    text-white
    drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]
    
    sm:text-6xl
    md:text-7xl
    lg:text-8xl
    xl:text-[7rem]
  "
>
  HOMES
  <br />
  BUILT AROUND YOU
</h1>

              {/* Description */}

              <p
                className="
                  mt-6
                  max-w-xl
                  text-sm
                  leading-7
                  text-white/85
                  sm:mt-7
                  sm:text-base
                  sm:leading-8
                  md:text-lg
                "
              >
                Building quality spaces
                with trust, precision and
                excellence.
              </p>

              {/* Buttons */}

              <div
                className="
                  mt-8
                  flex
                  flex-col
                  gap-3
                  sm:mt-9
                  sm:flex-row
                  sm:gap-4
                "
              >

                {/* Explore Projects */}

                <Link
                  to="/projects"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    bg-[#dad6d1]
                    px-6
                    py-3.5
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-[#171717]
                    shadow-lg
                    shadow-black/20
                    transition-all
                    duration-300
                    hover:bg-[#eea83f]
                    hover:-translate-y-0.5
                    hover:shadow-xl
                    sm:px-7
                    sm:py-4
                    sm:text-sm
                  "
                >
                  EXPLORE PROJECTS

                  <span
                    className="
                      ml-3
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>

                </Link>

                {/* Contact */}

                <Link
                  to="/contact"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    border
                    border-white/70
                    bg-[#D89B35]
                    px-6
                    py-3.5
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-white
                    shadow-lg
                    shadow-black/20
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:border-[#d4c5aa]
                    hover:bg-[#fff2db]
                    hover:text-[#1F2426]
                    sm:px-7
                    sm:py-4
                    sm:text-sm
                  "
                >

                  <Phone
                    size={17}
                    className="
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />

                  CONTACT US

                </Link>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            SLIDER CONTROLS
        ===================================================== */}

        {phase === "done" && (

          <div
            className="
              absolute
              bottom-7
              right-5
              z-20
              flex
              gap-2
              sm:bottom-8
              sm:right-8
              lg:right-10
            "
          >

            <button
              type="button"
              aria-label="Previous slide"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                border
                border-white/50
                bg-black/10
                text-white
                backdrop-blur-sm
                transition-all
                hover:bg-white
                hover:text-[#1F2426]
                sm:h-12
                sm:w-12
              "
            >
              <ArrowLeft size={18} />
            </button>

            <button
              type="button"
              aria-label="Next slide"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                bg-[#D89B35]
                text-white
                transition-all
                hover:bg-[#BD8227]
                sm:h-12
                sm:w-12
              "
            >
              <ArrowRight size={18} />
            </button>

          </div>

        )}

        {/* =====================================================
            SCROLL INDICATOR
        ===================================================== */}

        {scrollProgress < 0.9 && (

          <div
            className="
              absolute
              bottom-8
              left-1/2
              z-40
              flex
              -translate-x-1/2
              flex-col
              items-center
              gap-2
              text-white/70
            "
            style={{
              opacity:
                clamp(
                  1 -
                    scrollProgress * 2,
                  0,
                  1
                ),
            }}
          >

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.3em]
              "
            >
              Scroll to enter
            </span>

            <div
              className="
                flex
                h-10
                w-6
                items-start
                justify-center
                rounded-full
                border
                border-white/50
                p-1
              "
            >
              <div
                className="
                  h-2
                  w-1
                  rounded-full
                  bg-[#D89B35]
                  animate-bounce
                "
              />
            </div>

          </div>

        )}

        {/* =====================================================
            FULL SCREEN DOOR INTRO
        ===================================================== */}

        <div
          className="
            absolute
            inset-0
            z-[100]
            h-screen
            w-full
            overflow-hidden
          "
          style={{
            opacity:
              clamp(
                1 -
                  (scrollProgress - 0.85) /
                    0.15,
                0,
                1
              ),

            pointerEvents:
              scrollProgress >= 0.95
                ? "none"
                : "auto",
          }}
        >

          {/* =================================================
              PARKING AREA BEHIND THE DOOR
          ================================================= */}

          <div
            className="
              absolute
              inset-0
              h-full
              w-full
            "
          >

            <img
              src="/images/entrance/car-parking.png"
              alt=""
              aria-hidden="true"
              className="
                h-full
                w-full
                object-cover
                object-center
              "
              style={{
                transform:
                  `scale(${1.05 +
                    scrollProgress * 0.15})`,

                filter:
                  `brightness(${0.3 +
                    scrollProgress * 0.7})`,

                transition:
                  "transform 80ms linear, filter 80ms linear",

                willChange:
                  "transform, filter",
              }}
            />

            {/* Warm interior lighting */}

            <div
              className="
                absolute
                inset-0
              "
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(255,210,130,.65) 0%, rgba(216,155,53,.20) 35%, rgba(0,0,0,.65) 80%)",

                opacity:
                  0.25 +
                  scrollProgress * 0.75,
              }}
            />

          </div>

          {/* =================================================
              DARK OVERLAY
          ================================================= */}

          <div
            className="
              absolute
              inset-0
              bg-[#0d0b09]
            "
            style={{
              opacity:
                clamp(
                  1 -
                    scrollProgress * 1.15,
                  0,
                  1
                ),
            }}
          >

            {/* Architectural grid */}

            <div
              className="
                absolute
                inset-0
                opacity-[0.08]
              "
              style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    0deg,
                    #ffffff 0 1px,
                    transparent 1px 90px
                  ),
                  repeating-linear-gradient(
                    90deg,
                    #ffffff 0 1px,
                    transparent 1px 220px
                  )
                `,
              }}
            />

            {/* Warm light */}

            <div
              className="
                absolute
                left-1/2
                top-0
                h-64
                w-[40rem]
                max-w-full
                -translate-x-1/2
                rounded-full
                bg-[#D89B35]/10
                blur-3xl
              "
            />

          </div>

          {/* =================================================
              DOOR FRAME
          ================================================= */}

          <div
            className="
              absolute
              inset-0
              h-full
              w-full
            "
            style={{
              transform:
                `scale(${doorScale})`,

              transformOrigin:
                "center center",

              willChange:
                "transform",
            }}
          >

            {/* =================================================
                ARCHITECTURAL FRAME
            ================================================= */}

            <div
              className="
                absolute
                inset-0
                border-[10px]
                border-[#3d2a1b]
                sm:border-[14px]
              "
            />

            {/* Top frame */}

            <div
              className="
                absolute
                left-0
                right-0
                top-0
                h-5
                bg-gradient-to-b
                from-[#d7d0c4]
                via-[#938a7b]
                to-[#4c4338]
                shadow-[0_5px_20px_rgba(0,0,0,.8)]
                sm:h-7
              "
            />

            {/* Bottom frame */}

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                h-5
                bg-gradient-to-t
                from-[#d7d0c4]
                via-[#938a7b]
                to-[#4c4338]
                shadow-[0_-5px_20px_rgba(0,0,0,.8)]
                sm:h-7
              "
            />

            {/* Left frame */}

            <div
              className="
                absolute
                bottom-0
                left-0
                top-0
                w-5
                bg-gradient-to-r
                from-[#d7d0c4]
                via-[#938a7b]
                to-[#4c4338]
                sm:w-7
              "
            />

            {/* Right frame */}

            <div
              className="
                absolute
                bottom-0
                right-0
                top-0
                w-5
                bg-gradient-to-l
                from-[#d7d0c4]
                via-[#938a7b]
                to-[#4c4338]
                sm:w-7
              "
            />

            {/* =================================================
                DOOR AREA
            ================================================= */}

            <div
              className="
                absolute
                inset-[20px]
                overflow-hidden
                sm:inset-[28px]
              "
              style={{
                perspective:
                  "1800px",

                transformStyle:
                  "preserve-3d",
              }}
            >

              {/* LEFT DOOR */}

              <DoorLeaf
                side="left"
                progress={scrollProgress}
                reduce={reduce}
              />

              {/* RIGHT DOOR */}

              <DoorLeaf
                side="right"
                progress={scrollProgress}
                reduce={reduce}
              />

              {/* =================================================
                  CENTER BRANDING
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-30
                  flex
                  items-center
                  justify-center
                  text-center
                "
                style={{
                  opacity:
                    brandingOpacity,

                  transform:
                    `scale(${
                      1 -
                      scrollProgress * 0.12
                    })`,

                  transition:
                    "opacity 80ms linear, transform 80ms linear",
                }}
              >

                <div
                  className="
                    flex
                    flex-col
                    items-center
                    justify-center
                  "
                >

                  {/* Logo */}

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      border
                      border-[#D89B35]/70
                      bg-black/30
                      text-[#D89B35]
                      backdrop-blur-sm
                      sm:h-20
                      sm:w-20
                    "
                  >
                    <span
                      className="
                        text-3xl
                        font-light
                        sm:text-4xl
                      "
                    >
                      C
                    </span>
                  </div>

                  {/* Welcome */}

                  <p
                    className="
                      mt-6
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.45em]
                      text-[#D89B35]
                      sm:text-xs
                    "
                  >
                    WELCOME TO
                  </p>

                  {/* Company */}

                  <h2
                    className="
                      mt-2
                      text-3xl
                      font-bold
                      uppercase
                      tracking-tight
                      text-white
                      drop-shadow-[0_3px_10px_rgba(0,0,0,.8)]
                      sm:text-5xl
                      md:text-6xl
                    "
                  >
                    CHINIYAMAL
                  </h2>

                  {/* Construction */}

                  <p
                    className="
                      mt-1
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.5em]
                      text-white/70
                      sm:text-xs
                    "
                  >
                    CONSTRUCTION
                  </p>

                  {/* Divider */}

                  <div
                    className="
                      mx-auto
                      mt-6
                      h-px
                      w-20
                      bg-[#D89B35]
                    "
                  />

                  {/* Scroll instruction */}

                  <div
                    className="
                      mt-7
                      flex
                      flex-col
                      items-center
                      gap-3
                    "
                  >

                    <span
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.35em]
                        text-white/80
                      "
                    >
                      SCROLL TO ENTER
                    </span>

                    <div
                      className="
                        flex
                        h-10
                        w-6
                        items-start
                        justify-center
                        rounded-full
                        border
                        border-[#D89B35]/70
                        p-1
                      "
                    >
                      <div
                        className="
                          h-2
                          w-1
                          rounded-full
                          bg-[#D89B35]
                          animate-bounce
                        "
                      />
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* =================================================
              FLOOR LIGHT
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-1/2
              h-32
              w-[70%]
              -translate-x-1/2
              bg-[#D89B35]/10
              blur-[80px]
            "
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;