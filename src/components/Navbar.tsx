import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Phone,
  ArrowUpRight,
} from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  /* =====================================================
     NAVIGATION ITEMS
  ====================================================== */

  const navItems = [
    {
      label: "Home",
      id: "home",
    },
    {
      label: "About",
      id: "about",
    },
    {
      label: "Projects",
      id: "projects",
    },
    {
      label: "Services",
      id: "services",
    },
    {
      label: "Contact",
      id: "contact",
    },
  ];

  /* =====================================================
     CLOSE MOBILE MENU
  ====================================================== */

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* =====================================================
     SCROLL TO SECTION
  ====================================================== */

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    closeMenu();
  };

  /* =====================================================
     LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
  ====================================================== */

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* =====================================================
     ESC KEY CLOSES MOBILE MENU
  ====================================================== */

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    if (menuOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  return (
    <>
      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}

      <header
        className="
          fixed
          left-0
          top-0
          z-50
          w-full
          border-b
          border-white/10
          bg-black/25
          backdrop-blur-lg
        "
      >
        <div
          className="
            mx-auto
            flex
            h-20
            w-full
            max-w-7xl
            items-center
            justify-between
            px-5
            sm:px-8
            lg:px-10
          "
        >

          {/* =================================================
              LOGO
          ================================================== */}

          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="
              group
              flex
              flex-col
              text-left
              leading-none
            "
            aria-label="Go to home"
          >
            <span
              className="
                text-xl
                font-bold
                tracking-tight
                text-white
                transition-colors
                duration-300
                group-hover:text-[#D89B35]
                sm:text-2xl
              "
            >
              CHINIYAMAL
            </span>

            <span
              className="
                mt-1
                text-[8px]
                font-medium
                tracking-[0.3em]
                text-[#D89B35]
                sm:text-[9px]
              "
            >
              CONSTRUCTION
            </span>
          </button>


          {/* =================================================
              DESKTOP NAVIGATION
              1024px+
          ================================================== */}

          <nav
            className="
              hidden
              items-center
              gap-7
              lg:flex
              xl:gap-9
            "
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="
                  relative
                  py-2
                  text-sm
                  font-medium
                  text-white
                  transition-colors
                  duration-300
                  hover:text-[#D89B35]

                  after:absolute
                  after:bottom-0
                  after:left-0
                  after:h-px
                  after:w-0
                  after:bg-[#D89B35]
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {item.label}
              </button>
            ))}
          </nav>


          {/* =================================================
              DESKTOP CALL BUTTON
          ================================================== */}

          <div className="hidden items-center lg:flex">
            <a
              href="tel:+919999999999"
              className="
                group
                inline-flex
                items-center
                gap-2
                bg-[#D89B35]
                px-5
                py-3
                text-xs
                font-semibold
                uppercase
                tracking-[0.12em]
                text-white
                transition-all
                duration-300
                hover:bg-[#BD8227]
              "
            >
              <Phone
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:rotate-12
                "
              />

              CALL US

              <ArrowUpRight
                size={14}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>
          </div>


          {/* =================================================
              TABLET + MOBILE MENU BUTTON
              Below 1024px
          ================================================== */}

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              border
              border-white/20
              bg-black/20
              text-white
              backdrop-blur-sm
              transition-all
              duration-300
              hover:border-[#D89B35]
              hover:text-[#D89B35]
              lg:hidden
            "
          >
            <Menu size={24} />
          </button>

        </div>
      </header>


      {/* =====================================================
          MOBILE / TABLET DRAWER
      ====================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-[60]
          lg:hidden
          ${
            menuOpen
              ? "pointer-events-auto"
              : "pointer-events-none"
          }
        `}
      >

        {/* =================================================
            BACKDROP
        ================================================== */}

        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMenu}
          className={`
            absolute
            inset-0
            h-full
            w-full
            bg-black/60
            backdrop-blur-[2px]
            transition-opacity
            duration-500

            ${
              menuOpen
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        />


        {/* =================================================
            RIGHT SIDE MENU
        ================================================== */}

        <aside
          className={`
            absolute
            right-0
            top-0
            h-full
            w-[88%]
            max-w-md
            border-l
            border-white/10
            bg-[#111416]
            shadow-[-20px_0_60px_rgba(0,0,0,.45)]
            transition-transform
            duration-500
            ease-[cubic-bezier(0.77,0,0.175,1)]

            sm:w-[70%]
            md:w-[55%]

            ${
              menuOpen
                ? "translate-x-0"
                : "translate-x-full"
            }
          `}
        >

          {/* =================================================
              DRAWER HEADER
          ================================================== */}

          <div
            className="
              flex
              h-20
              items-center
              justify-between
              border-b
              border-white/10
              px-5
              sm:px-8
            "
          >

            {/* Logo */}

            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="
                flex
                flex-col
                text-left
                leading-none
              "
            >
              <span
                className="
                  text-xl
                  font-bold
                  tracking-tight
                  text-white
                "
              >
                CHINIYAMAL
              </span>

              <span
                className="
                  mt-1
                  text-[8px]
                  font-medium
                  tracking-[0.3em]
                  text-[#D89B35]
                "
              >
                CONSTRUCTION
              </span>
            </button>


            {/* Close Button */}

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation menu"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                border
                border-white/10
                text-white
                transition-all
                duration-300
                hover:border-[#D89B35]
                hover:text-[#D89B35]
              "
            >
              <X size={23} />
            </button>

          </div>


          {/* =================================================
              DRAWER CONTENT
          ================================================== */}

          <div
            className="
              flex
              h-[calc(100%-5rem)]
              flex-col
              overflow-y-auto
              px-5
              py-10
              sm:px-8
            "
          >

            {/* Small Heading */}

            <p
              className="
                mb-8
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.35em]
                text-[#D89B35]
              "
            >
              NAVIGATION
            </p>


            {/* =================================================
                MOBILE NAVIGATION
            ================================================== */}

            <nav className="flex flex-col">

              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-between
                    border-b
                    border-white/10
                    py-5
                    text-left
                    text-xl
                    font-medium
                    text-white
                    transition-all
                    duration-300
                    hover:pl-2
                    hover:text-[#D89B35]
                    sm:text-2xl
                  "
                  style={{
                    transitionDelay: menuOpen
                      ? `${index * 70}ms`
                      : "0ms",
                  }}
                >
                  <span>
                    {item.label}
                  </span>

                  <ArrowUpRight
                    size={20}
                    className="
                      text-white/30
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-[#D89B35]
                    "
                  />
                </button>
              ))}

            </nav>


            {/* =================================================
                CONTACT AREA
            ================================================== */}

            <div className="mt-auto pt-10">

              <p
                className="
                  mb-4
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-white/40
                "
              >
                START YOUR PROJECT
              </p>

              <a
                href="tel:+919999999999"
                onClick={closeMenu}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  bg-[#D89B35]
                  px-6
                  py-4
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#BD8227]
                "
              >
                <Phone size={17} />

                CALL US
              </a>

            </div>

          </div>

        </aside>

      </div>
    </>
  );
};

export default Navbar;