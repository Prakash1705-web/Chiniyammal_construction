import { useEffect, useState } from "react";

type DoorPhase = "closed" | "opening" | "opened";

const DoorEntrance = () => {
  const [phase, setPhase] = useState<DoorPhase>("closed");

  const handleOpen = () => {
    if (phase !== "closed") return;

    setPhase("opening");
  };

  useEffect(() => {
    if (phase !== "opening") return;

    const timer = window.setTimeout(() => {
      setPhase("opened");
    }, 1800);

    return () => clearTimeout(timer);
  }, [phase]);

  // Prevent scrolling while entrance animation is running
  useEffect(() => {
    if (phase !== "opened") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  if (phase === "opened") {
    return null;
  }

  return (
    <section className="fixed inset-0 z-[100] overflow-hidden bg-black">
      
      {/* =========================================
          CAR PARKING AREA - BEHIND THE GATE
      ========================================== */}
      <div
        className={`
          absolute inset-0
          bg-cover bg-center bg-no-repeat
          transition-all duration-[2200ms] ease-out
          ${
            phase === "opening"
              ? "scale-[1.12]"
              : "scale-100"
          }
        `}
        style={{
          backgroundImage: "url('/images/entrance/car-parking.png')",
        }}
      />

      {/* Warm cinematic overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* =========================================
          LEFT GATE
      ========================================== */}
      <div
        onClick={handleOpen}
        className={`
          absolute left-0 top-0
          h-full w-1/2
          cursor-pointer
          overflow-hidden
          bg-cover bg-left
          transition-transform
          duration-[1800ms]
          ease-[cubic-bezier(0.77,0,0.175,1)]
          [transform-style:preserve-3d]
          [perspective:1800px]
          ${
            phase === "opening"
              ? "-translate-x-[100%] -rotate-y-[105deg]"
              : "translate-x-0 rotate-y-0"
          }
        `}
        style={{
          backgroundImage: "url('/images/entrance/gate-closed.png')",
          backgroundSize: "200% 100%",
          backgroundPosition: "left center",
          transformOrigin: "left center",
        }}
      >
        {/* subtle shadow */}
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black/30 to-transparent" />
      </div>

      {/* =========================================
          RIGHT GATE
      ========================================== */}
      <div
        onClick={handleOpen}
        className={`
          absolute right-0 top-0
          h-full w-1/2
          cursor-pointer
          overflow-hidden
          bg-cover bg-right
          transition-transform
          duration-[1800ms]
          ease-[cubic-bezier(0.77,0,0.175,1)]
          [transform-style:preserve-3d]
          [perspective:1800px]
          ${
            phase === "opening"
              ? "translate-x-[100%] rotate-y-[105deg]"
              : "translate-x-0 rotate-y-0"
          }
        `}
        style={{
          backgroundImage: "url('/images/entrance/gate-closed.png')",
          backgroundSize: "200% 100%",
          backgroundPosition: "right center",
          transformOrigin: "right center",
        }}
      >
        {/* subtle shadow */}
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/30 to-transparent" />
      </div>

      {/* =========================================
          CENTER INSTRUCTION
      ========================================== */}
      <div
        className={`
          pointer-events-none
          absolute inset-0
          flex items-center justify-center
          transition-all duration-500
          ${
            phase === "opening"
              ? "scale-110 opacity-0"
              : "scale-100 opacity-100"
          }
        `}
      >
        <div className="mt-[55vh] text-center text-white">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#D89B35]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#D89B35] sm:text-xs">
              CHINIYAMAL CONSTRUCTION
            </span>

            <span className="h-px w-10 bg-[#D89B35]" />
          </div>

          <h1 className="text-2xl font-light tracking-[0.15em] sm:text-4xl">
            YOUR HOME AWAITS
          </h1>

          <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/70">
            Click to enter
          </p>

          {/* Animated click indicator */}
          <div className="mx-auto mt-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/40">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#D89B35]" />
          </div>
        </div>
      </div>

      {/* =========================================
          TOP BRAND
      ========================================== */}
      <div className="pointer-events-none absolute left-1/2 top-8 z-10 -translate-x-1/2">
        <p className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.3em] text-white/90 sm:text-sm">
          CHINIYAMAL
          <span className="text-[#D89B35]"> CONSTRUCTION</span>
        </p>
      </div>

      {/* =========================================
          BOTTOM TEXT
      ========================================== */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center">
        <p className="text-[9px] uppercase tracking-[0.3em] text-white/50 sm:text-xs">
          Building Homes • Building Dreams
        </p>
      </div>
    </section>
  );
};

export default DoorEntrance;