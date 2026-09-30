import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="max-w-xl">

      {/* Heading */}
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#D89B35]">
        CONTACT US
      </p>

      <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#1F2426] sm:text-5xl">
        Start Your Project
      </h2>

      <p className="mt-5 max-w-lg text-base leading-7 text-[#6B7073] sm:text-lg sm:leading-8">
        Have a construction project in mind?
        Get in touch with our team.
      </p>

      {/* Contact Details */}
      <div className="mt-10 space-y-7">

        {/* Phone */}
        <div className="group flex items-start gap-4">

          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              bg-[#D89B35]/10
              text-[#D89B35]
              transition-all
              duration-300
              group-hover:bg-[#D89B35]
              group-hover:text-white
            "
          >
            <Phone size={20} strokeWidth={1.7} />
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6B7073]">
              Phone
            </span>

            <p className="mt-1 text-base font-medium text-[#1F2426] sm:text-lg">
              +91 XXXXX XXXXX
            </p>
          </div>

        </div>

        {/* Email */}
        <div className="group flex items-start gap-4">

          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              bg-[#D89B35]/10
              text-[#D89B35]
              transition-all
              duration-300
              group-hover:bg-[#D89B35]
              group-hover:text-white
            "
          >
            <Mail size={20} strokeWidth={1.7} />
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6B7073]">
              Email
            </span>

            <p className="mt-1 break-all text-base font-medium text-[#1F2426] sm:text-lg">
              info@chiniyamalconstruction.com
            </p>
          </div>

        </div>

        {/* Location */}
        <div className="group flex items-start gap-4">

          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              bg-[#D89B35]/10
              text-[#D89B35]
              transition-all
              duration-300
              group-hover:bg-[#D89B35]
              group-hover:text-white
            "
          >
            <MapPin size={20} strokeWidth={1.7} />
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6B7073]">
              Location
            </span>

            <p className="mt-1 text-base font-medium text-[#1F2426] sm:text-lg">
              Tamil Nadu, India
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ContactInfo; 