import {
  Building2,
  Home,
  Hammer,
  Paintbrush,
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard = ({
  title,
  description,
}: ServiceCardProps) => {
  const getIcon = () => {
    if (title.includes("Residential")) {
      return <Home size={32} strokeWidth={1.5} />;
    }

    if (title.includes("Commercial")) {
      return <Building2 size={32} strokeWidth={1.5} />;
    }

    if (title.includes("Renovation")) {
      return <Hammer size={32} strokeWidth={1.5} />;
    }

    return <Paintbrush size={32} strokeWidth={1.5} />;
  };

  return (
    <article
      className="
        group
        border
        border-[#E5E2DC]
        bg-[#F7F5F0]
        p-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#D89B35]
        hover:shadow-xl
        hover:shadow-black/5
        sm:p-10
      "
    >
      {/* Icon */}
      <div
        className="
          flex
          h-14
          w-14
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
        {getIcon()}
      </div>

      {/* Title */}
      <h3
        className="
          mt-8
          text-xl
          font-semibold
          tracking-tight
          text-[#1F2426]
          transition-colors
          duration-300
          group-hover:text-[#D89B35]
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 text-sm leading-7 text-[#6B7073]">
        {description}
      </p>

      {/* Bottom Accent */}
      <div
        className="
          mt-8
          h-px
          w-10
          bg-[#D89B35]
          transition-all
          duration-300
          group-hover:w-20
        "
      />
    </article>
  );
};

export default ServiceCard;