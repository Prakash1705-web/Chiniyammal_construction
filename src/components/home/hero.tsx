import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

/* =========================================================
   TYPES
========================================================= */

type Phase = "closed" | "opening" | "done";

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
    DOOR ANIMATION

    0%       → Door completely closed
    35%      → Door still closed
    35-85%   → Door opens progressively
    85%+      → Door completely open
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

        opacity:
          reduce && progress > 0.35
            ? 0
            : 1,

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

  /* =======================================================
     STATES
  ======================================================= */

  const [scrollProgress, setScrollProgress] =
    useState(0);

  const [phase, setPhase] =
    useState<Phase>("closed");

  const [reduce, setReduce] =
    useState(false);

  /*
    IMPORTANT

    This state controls the 0.5 second
    delayed background blur.
  */

  const [imageBlur, setImageBlur] =
    useState(false);

  /* =======================================================
     BLUR AFTER 0.5 SECOND
  ======================================================= */

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setImageBlur(true);
    }, 500);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

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
        const section = heroRef.current;

        if (!section) return;

        const rect =
          section.getBoundingClientRect();

        /*
          Hero section is 280vh.

          Progress:

          0   → Top of hero
          0.35 → Door starts opening
          0.85 → Door fully open
          1   → Hero animation complete
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

        /* =================================================
           PHASE
        ================================================= */

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
     DOOR ZOOM
  ======================================================= */

  const doorScale = reduce
    ? 1
    : 1 + scrollProgress * 0.18;

  /* =======================================================
     BACKGROUND BRIGHTNESS
  ======================================================= */

  const backgroundBrightness =
    0.18 +
    scrollProgress * 0.67;

  /* =======================================================
     CENTER BRANDING OPACITY
  ======================================================= */

  const brandingOpacity =
    clamp(
      1 -
        scrollProgress / 0.45,
      0,
      1
    );

  /* =======================================================
     HERO CONTENT OPACITY
  ======================================================= */

  const heroContentOpacity =
    clamp(
      (scrollProgress - 0.75) /
        0.25,
      0,
      1
    );

  /* =======================================================
     RETURN
  ======================================================= */

  return (
   <section
  ref={heroRef}
  id="home"
  className="relative h-[240vh] bg-[#111]"
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

        {/* ===================================================
            BACKGROUND IMAGE
        =================================================== */}

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
            /*
              Slight initial scale prevents
              visible edges when blur is applied.
            */

            transform:
              `scale(${
                1.05 +
                scrollProgress * 0.49
              })`,

            /*
              0.5 sec after page load:

              blur 0px → 6px

              Smoothly transitions over 700ms.
            */

            filter: `
              brightness(${backgroundBrightness})
              blur(${imageBlur ? 1 : 0}px)
            `,

            transition:
              "transform 80ms linear, filter 700ms ease",

            willChange:
              "transform, filter",
          }}
        />

        {/* ===================================================
            DARK HERO OVERLAY
        =================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-black/35
          "
          style={{
            opacity:
              1 -
              heroContentOpacity *
                0.45,
          }}
        />

        {/* ===================================================
            NORMAL HERO CONTENT
        =================================================== */}

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
              `translateY(${
                24 -
                heroContentOpacity *
                  24
              }px)`,

            transition:
              "opacity 100ms linear, transform 100ms linear",
          }}>

          <div
            className="
              mx-auto
              w-full
              max-w-7xl
              px-6
              pt-16

              sm:px-8
              sm:pt-20

              md:px-12

              lg:px-16

              xl:px-20">

            <div
              className="
                max-w-[760px]
              "
            >

              {/* ===========================================
                  EYEBROW
              =========================================== */}

              <p
                className="
                  mb-5
                  font-['DM_Sans']
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#D89B35]

                  sm:text-xs
                  sm:tracking-[0.4em]

                  md:text-sm
                "
              >
                WHERE VISION MEETS CRAFTSMANSHIP
              </p>

              {/* ===========================================
                  MAIN HEADING
              =========================================== */}

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

              {/* ===========================================
                  DESCRIPTION
              =========================================== */}

              <p
                className="
                  mt-6
                  max-w-xl
                  font-['DM_Sans']
                  text-sm
                  font-normal
                  leading-7
                  text-white/85

                  sm:mt-7
                  sm:text-base
                  sm:leading-8

                  md:text-lg
                "
              >
                Thoughtfully designed. Precisely built.
                Creating timeless spaces where life
                begins, grows and belongs.
              </p>

              {/* ===========================================
                  BUTTONS
              =========================================== */}

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

                {/* -----------------------------------------
                    PROJECT BUTTON
                ----------------------------------------- */}

                <Link
                  to="/projects"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-3

                    bg-[#D89B35]

                    px-6
                    py-3.5

                    font-['DM_Sans']
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-[#171717]

                    shadow-lg
                    shadow-black/20

                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:bg-[#BD8227]
                    hover:shadow-xl

                    sm:px-7
                    sm:py-4
                    sm:text-sm
                  "
                >
                  VIEW OUR PROJECTS

                  <span
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </Link>

                {/* -----------------------------------------
                    CONTACT BUTTON
                ----------------------------------------- */}

                <Link
                  to="/contact"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-2

                    border
                    border-white/60

                    bg-white/10

                    px-6
                    py-3.5

                    font-['DM_Sans']
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-white

                    shadow-lg
                    shadow-black/20

                    backdrop-blur-md

                    transition-all
                    duration-300

                    hover:border-[#D89B35]
                    hover:bg-[#D89B35]
                    hover:text-[#171717]

                    sm:px-7
                    sm:py-4
                    sm:text-sm
                  "
                >
                  <Phone
                    size={16}
                    strokeWidth={1.8}
                    className="
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />

                  BUILD WITH US
                </Link>

              </div>

            </div>

          </div>

        </div>

        {/* ===================================================
            SLIDER CONTROLS
        =================================================== */}

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

        {/* ===================================================
            SCROLL INDICATOR
        =================================================== */}

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
                font-['DM_Sans']
                text-[10px]
                uppercase
                tracking-[0.3em]
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

        {/* ===================================================
            FULL SCREEN DOOR INTRO
        =================================================== */}

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
            /*
              Door overlay remains visible
              until the door is almost completely open.
            */

            opacity:
              clamp(
                1 -
                  (scrollProgress -
                    0.85) /
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
              PARKING AREA BEHIND DOOR
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
                  `scale(${
                    1.05 +
                    scrollProgress *
                      0.15
                  })`,

                filter:
                  `brightness(${
                    0.3 +
                    scrollProgress *
                      0.7
                  })`,

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
                  scrollProgress *
                    0.75,
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
                    scrollProgress *
                      1.15,
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

                blur-2xl
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

            {/* ===============================================
                ARCHITECTURAL FRAME
            =============================================== */}

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
               
               

                sm:w-7
              "
            />

            {/* ===============================================
                DOOR AREA
            =============================================== */}

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
                progress={
                  scrollProgress
                }
                reduce={reduce}
              />

              {/* RIGHT DOOR */}

              <DoorLeaf
                side="right"
                progress={
                  scrollProgress
                }
                reduce={reduce}
              />

              {/* =============================================
                  CENTER BRANDING
              ============================================= */}

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
                      scrollProgress *
                        0.12
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

                  {/* =========================================
                      LOGO
                  ========================================= */}

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
                        font-['Playfair_Display']
                        text-3xl
                        font-medium

                        sm:text-4xl
                      "
                    >
                      C
                    </span>
                  </div>

                  {/* =========================================
                      WELCOME
                  ========================================= */}

                  <p
                    className="
                      mt-6

                      font-['DM_Sans']
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

                  {/* =========================================
                      COMPANY
                  ========================================= */}

                  <h2
                    className="
                      mt-2

                      font-['Playfair_Display']
                      text-3xl
                      font-medium
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

                  {/* =========================================
                      CONSTRUCTION
                  ========================================= */}

                  <p
                    className="
                      mt-1

                      font-['DM_Sans']
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

                  {/* =========================================
                      DIVIDER
                  ========================================= */}

                  <div
                    className="
                      mx-auto
                      mt-6

                      h-px
                      w-20

                      bg-[#D89B35]
                    "
                  />

                  {/* =========================================
                      SCROLL INSTRUCTION
                  ========================================= */}

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
                        font-['DM_Sans']
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

              blur-[10px]
            "
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;