import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1F2426] text-white">

      {/* Main Footer */}
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-7xl
          gap-12
          px-5
          py-16
          sm:px-8
          sm:py-20
          md:grid-cols-2
          lg:grid-cols-3
          lg:gap-20
          lg:px-10
        "
      >

        {/* Brand */}
        <div>
          <div className="flex flex-col leading-none">

            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              CHINIYAMAL
            </h2>

            <span
              className="
                mt-2
                text-[9px]
                font-medium
                tracking-[0.35em]
                text-[#D89B35]
                sm:text-[10px]
              "
            >
              CONSTRUCTION
            </span>

          </div>

          <p className="mt-6 max-w-xs text-sm leading-7 text-white/50">
            Building spaces. Creating futures.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Quick Links
          </h3>

          <nav className="mt-6 flex flex-col gap-3">

            <Link
              to="/"
              className="w-fit text-sm text-white/50 transition-colors duration-300 hover:text-[#D89B35]"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="w-fit text-sm text-white/50 transition-colors duration-300 hover:text-[#D89B35]"
            >
              About Us
            </Link>

            <Link
              to="/projects"
              className="w-fit text-sm text-white/50 transition-colors duration-300 hover:text-[#D89B35]"
            >
              Projects
            </Link>

            <Link
              to="/services"
              className="w-fit text-sm text-white/50 transition-colors duration-300 hover:text-[#D89B35]"
            >
              Services
            </Link>

            <Link
              to="/contact"
              className="w-fit text-sm text-white/50 transition-colors duration-300 hover:text-[#D89B35]"
            >
              Contact
            </Link>

          </nav>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Contact
          </h3>

          <div className="mt-6 space-y-3">

            <p className="text-sm text-white/50">
              +91 63800 89126
            </p>

            <p className="break-all text-sm text-white/50">
              info@chiniyamalconstruction.com
            </p>

            <p className="text-sm text-white/50">
              Tamil Nadu, India
            </p>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">

        <div
          className="
            mx-auto
            flex
            w-full
            max-w-7xl
            flex-col
            gap-3
            px-5
            py-6
            sm:px-8
            md:flex-row
            md:items-center
            md:justify-between
            lg:px-10
          "
        >

          <p className="text-xs text-white/40 sm:text-sm">
            © 2026 Chiniyamal Construction. All Rights Reserved.
          </p>

          <p className="text-xs text-white/30 sm:text-sm">
            Built with quality & precision.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;