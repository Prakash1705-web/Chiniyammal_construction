

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

// Files in public/ are referenced by URL, not imported
// const heroPic = "/images/hero_pic.png";
// const carPark = "/images/Car_Park.png";

type Phase = "closed" | "opening" | "done";



const dummyBackground =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85";

const heroPic = dummyBackground;
const carPark = dummyBackground;
const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

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

  // 0–35% closed, 35–85% opening, 85%+ fully open
  const doorProgress = clamp((progress - 0.35) / 0.5, 0, 1);
  const rotation = isLeft ? -100 * doorProgress : 100 * doorProgress;

  return (
    <div
      className={`absolute inset-y-0 w-1/2 overflow-hidden border-black/70 ${
        isLeft ? "left-0 border-r" : "right-0 border-l"
      }`}
      style={{
        transformOrigin: isLeft ? "left center" : "right center",
        transform: reduce ? "rotateY(0deg)" : `rotateY(${rotation}deg)`,
        opacity: reduce && progress > 0.35 ? 0 : 1,
        transition: reduce ? "opacity 0.3s ease" : "transform 60ms linear",
        backfaceVisibility: "hidden",
        background: `linear-gradient(${
          isLeft ? "90deg" : "270deg"
        }, #211108 0%, #4b2913 35%, #6d3d1b 65%, #32180b 100%)`,
        boxShadow: isLeft
          ? "15px 0 45px rgba(0,0,0,.7)"
          : "-15px 0 45px rgba(0,0,0,.7)",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      {/* Wood grain */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            repeating-linear-gradient(90deg, rgba(255,220,170,.07) 0 2px, transparent 3px 11px),
            repeating-linear-gradient(0deg, rgba(0,0,0,.12) 0 1px, transparent 2px 55px)
          `,
        }}
      />

      {/* Wood lighting */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-black/30" />

      {/* Door panels */}
      <div className="absolute inset-[5%] grid grid-rows-[1fr_1.4fr] gap-[4%]">
        {[0, 1].map((i) => (
          <div
            key={i}
            className="border border-[#c18b54]/30 bg-black/[0.08] shadow-[inset_0_0_35px_rgba(0,0,0,.55)]"
          >
            <div className="m-[7%] h-[86%] border border-[#d3a16b]/20" />
          </div>
        ))}
      </div>

      {/* Center edge shadow */}
      <div
        className={`absolute inset-y-0 w-24 from-black/50 to-transparent ${
          isLeft ? "right-0 bg-gradient-to-l" : "left-0 bg-gradient-to-r"
        }`}
      />

      {/* Brass handle */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 ${
          isLeft ? "right-[5%]" : "left-[5%]"
        }`}
      >
        <div className="h-28 w-4 rounded-full bg-gradient-to-r from-[#513315] via-[#e0b56c] to-[#69441f] shadow-[3px_3px_12px_rgba(0,0,0,.7)] sm:h-36 sm:w-5" />
        <div className="absolute -left-1 top-1 h-4 w-6 rounded-full bg-[#c89555]" />
        <div className="absolute -left-1 bottom-1 h-4 w-6 rounded-full bg-[#c89555]" />
      </div>
    </div>
  );
};

/* =========================================================
   HERO
========================================================= */

const Hero = () => {
  const heroRef = useRef<HTMLElement | null>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [phase, setPhase] = useState<Phase>("closed");
  const [reduce, setReduce] = useState(false);
  const [imageBlur, setImageBlur] = useState(false);

  // Blur background after 0.5s
  useEffect(() => {
    const timer = window.setTimeout(() => setImageBlur(true), 500);
    return () => window.clearTimeout(timer);
  }, []);

  // Reduced motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduce(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Scroll control
  useEffect(() => {
    let frame = 0;

    const handleScroll = () => {
      if (!heroRef.current) return;
      if (frame) cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const section = heroRef.current;
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const scrollable = section.offsetHeight - window.innerHeight;
        const progress =
          scrollable > 0 ? clamp(-rect.top / scrollable, 0, 1) : 0;

        setScrollProgress(progress);

        if (progress < 0.35) setPhase("closed");
        else if (progress < 0.9) setPhase("opening");
        else setPhase("done");
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const doorScale = reduce ? 1 : 1 + scrollProgress * 0.18;
  const backgroundBrightness = 0.18 + scrollProgress * 0.67;
  const brandingOpacity = clamp(1 - scrollProgress / 0.45, 0, 1);
  const heroContentOpacity = clamp((scrollProgress - 0.86) / 0.14, 0, 1);

  return (
    <section ref={heroRef} id="home" className="relative h-[240vh] bg-[#111]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* ================= BACKGROUND IMAGE ================= */}
        <img
          src={heroPic}
          alt="Chiniyamal Construction portico"
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{
            // extra scale hides soft blurred edges
            transform: `scale(${1.1 + scrollProgress * 0.45})`,
            filter: `brightness(${backgroundBrightness}) blur(${
              imageBlur ? 6 : 0
            }px)`,
            transition: "transform 80ms linear, filter 700ms ease",
            willChange: "transform, filter",
          }}
        />

        {/* Dark hero overlay */}
        <div
          className="absolute inset-0 bg-black/35"
          style={{ opacity: 1 - heroContentOpacity * 0.45 }}
        />

        {/* ================= HERO CONTENT ================= */}
        <div
          className="absolute inset-0 z-10 flex items-center"
          style={{
            opacity: heroContentOpacity,
            transform: `translateY(${24 - heroContentOpacity * 24}px)`,
            transition: "opacity 100ms linear, transform 100ms linear",
            pointerEvents: heroContentOpacity > 0.5 ? "auto" : "none",
          }}
        >
          <div className="mx-auto w-full max-w-7xl px-6 pt-16 sm:px-8 sm:pt-20 md:px-12 lg:px-16 xl:px-20">
            <div className="max-w-[760px]">
              <p className="mb-5 font-['DM_Sans'] text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D89B35] sm:text-xs sm:tracking-[0.4em] md:text-sm">
                WHERE VISION MEETS CRAFTSMANSHIP
              </p>

              <h1 className="font-['Playfair_Display'] text-5xl font-medium uppercase leading-[0.9] tracking-[-0.03em] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem]">
                HOMES
                <br />
                BUILT AROUND YOU
              </h1>

              <p className="mt-6 max-w-xl font-['DM_Sans'] text-sm font-normal leading-7 text-white/85 sm:mt-7 sm:text-base sm:leading-8 md:text-lg">
                Thoughtfully designed. Precisely built. Creating timeless
                spaces where life begins, grows and belongs.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
                <Link
                  to="/projects"
                  className="group inline-flex items-center justify-center gap-3 bg-[#D89B35] px-6 py-3.5 font-['DM_Sans'] text-xs font-semibold uppercase tracking-[0.14em] text-[#171717] shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#BD8227] hover:shadow-xl sm:px-7 sm:py-4 sm:text-sm"
                >
                  VIEW OUR PROJECTS
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 border border-white/60 bg-white/100 px-6 py-3.5 font-['DM_Sans'] text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-lg shadow-black/20 backdrop-blur-md transition-all duration-300 hover:border-[#D89B35] hover:bg-[#D89B35]  sm:px-7 sm:py-4 sm:text-sm"
                >
                  <Phone
                    size={16}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  BUILD WITH US
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SLIDER CONTROLS ================= */}
        {phase === "done" && (
          <div className="absolute bottom-7 right-5 z-20 flex gap-2 sm:bottom-8 sm:right-8 lg:right-10">
            <button
              type="button"
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center border border-white/50 bg-black/10 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#1F2426] sm:h-12 sm:w-12"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center bg-[#D89B35] text-white transition-all hover:bg-[#BD8227] sm:h-12 sm:w-12"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        )}

        {/* ================= FULL SCREEN DOOR INTRO ================= */}
        <div
          className="absolute inset-0 z-[100] h-screen w-full overflow-hidden"
          style={{
            opacity: clamp(1 - (scrollProgress - 0.85) / 0.15, 0, 1),
            pointerEvents: scrollProgress >= 0.9 ? "none" : "auto",
          }}
        >
          {/* Car park behind the door */}
          <div className="absolute inset-0 h-full w-full bg-[#0d0b09]">
            <img
              src={carPark}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover object-center"
              style={{
                filter: `brightness(${0.3 + scrollProgress * 0.7})`,
                transform: `scale(${1.02 + scrollProgress * 0.08})`,
                transition: "filter 80ms linear, transform 80ms linear",
                willChange: "filter, transform",
              }}
            />

            {/* Warm interior lighting */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(255,210,130,.65) 0%, rgba(216,155,53,.20) 35%, rgba(0,0,0,.65) 80%)",
                opacity: clamp(0.22 - (scrollProgress - 0.35) * 0.2, 0.04, 0.22),
              }}
            />
          </div>

          {/* Dark overlay — semi-transparent so Car_Park stays faintly visible */}
          <div
            className="absolute inset-0 bg-[#0d0b09]"
            style={{
              opacity: clamp(0.85 - (scrollProgress - 0.35) / 0.5, 0, 0.85),
            }}
          >
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(0deg, #ffffff 0 1px, transparent 1px 90px),
                  repeating-linear-gradient(90deg, #ffffff 0 1px, transparent 1px 220px)
                `,
              }}
            />
            <div className="absolute left-1/2 top-0 h-64 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-[#D89B35]/10 blur-2xl" />
          </div>

          {/* Door frame */}
          <div
            className="absolute inset-0 h-full w-full"
            style={{
              transform: `scale(${doorScale})`,
              transformOrigin: "center center",
              willChange: "transform",
            }}
          >
            <div className="absolute inset-0 border-[10px] border-[#3d2a1b] sm:border-[14px]" />

            {/* Top */}
            <div className="absolute left-0 right-0 top-0 h-5 bg-gradient-to-b from-[#5a3a22] to-[#2a1a0e] shadow-[0_5px_20px_rgba(0,0,0,.8)] sm:h-7" />
            {/* Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-[#5a3a22] to-[#2a1a0e] shadow-[0_-5px_20px_rgba(0,0,0,.8)] sm:h-7" />
            {/* Left */}
            <div className="absolute bottom-0 left-0 top-0 w-5 bg-gradient-to-r from-[#5a3a22] to-[#2a1a0e] sm:w-7" />
            {/* Right */}
            <div className="absolute bottom-0 right-0 top-0 w-5 bg-gradient-to-l from-[#5a3a22] to-[#2a1a0e] sm:w-7" />

            {/* Door area */}
            <div
              className="absolute inset-[20px] overflow-hidden sm:inset-[28px]"
              style={{ perspective: "1800px", transformStyle: "preserve-3d" }}
            >
              <DoorLeaf side="left" progress={scrollProgress} reduce={reduce} />
              <DoorLeaf side="right" progress={scrollProgress} reduce={reduce} />

              {/* Center branding */}
              <div
                className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center text-center"
                style={{
                  opacity: brandingOpacity,
                  transform: `scale(${1 - scrollProgress * 0.12})`,
                  transition: "opacity 80ms linear, transform 80ms linear",
                }}
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center bg-black/30 backdrop-blur-sm">
                    <img
                      src={logo}
                      alt="Chiniyamal Construction"
                      className="h-16 w-16 object-contain sm:h-24 sm:w-24"
                    />
                  </div>

                  <p className="mt-6 font-['DM_Sans'] text-[10px] font-semibold uppercase tracking-[0.45em] text-[#D89B35] sm:text-xs">
                    WELCOME TO
                  </p>

                  <h2 className="mt-2 font-['Playfair_Display'] text-3xl font-medium uppercase tracking-tight text-white drop-shadow-[0_3px_10px_rgba(0,0,0,.8)] sm:text-5xl md:text-6xl">
                    CHINIYAMAL
                  </h2>

                  <p className="mt-1 font-['DM_Sans'] text-[9px] font-medium uppercase tracking-[0.5em] text-white/70 sm:text-xs">
                    CONSTRUCTION
                  </p>

                  <div className="mx-auto mt-6 h-px w-20 bg-[#D89B35]" />

                  <div className="mt-7 flex flex-col items-center gap-3">
                    <span className="font-['DM_Sans'] text-[10px] font-semibold uppercase tracking-[0.35em] text-white/80">
                      SCROLL TO Open
                    </span>
                    <div className="flex h-10 w-6 items-start justify-center rounded-full border border-[#D89B35]/70 p-1">
                      <div className="h-2 w-1 animate-bounce rounded-full bg-[#D89B35]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floor light */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-32 w-[70%] -translate-x-1/2 bg-[#D89B35]/10 blur-[10px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;