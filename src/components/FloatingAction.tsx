import {
  Phone,
  MessageCircle,
  ClipboardList,
} from "lucide-react";

const FloatingActions = () => {
  return (
    <div
      className="
        fixed
        right-0
        top-1/2
        z-50
        hidden
        -translate-y-1/2
        flex-col
        gap-2
        rounded-l-xl
        bg-[#D89B35]
        p-2
        shadow-xl
        sm:flex
      "
    >
      {/* Enquiry */}
      <button
        type="button"
        aria-label="Enquiry"
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-[#1F2426]
          text-white
          transition-all
          duration-300
          hover:scale-105
          hover:bg-white
          hover:text-[#1F2426]
          focus:outline-none
          focus:ring-2
          focus:ring-white
          focus:ring-offset-2
          focus:ring-offset-[#D89B35]
        "
      >
        <ClipboardList size={19} strokeWidth={1.8} />
      </button>

      {/* Call */}
      <button
        type="button"
        aria-label="Call Us"
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-[#1F2426]
          text-white
          transition-all
          duration-300
          hover:scale-105
          hover:bg-white
          hover:text-[#1F2426]
          focus:outline-none
          focus:ring-2
          focus:ring-white
          focus:ring-offset-2
          focus:ring-offset-[#D89B35]
        "
      >
        <Phone size={19} strokeWidth={1.8} />
      </button>

      {/* WhatsApp */}
      <button
        type="button"
        aria-label="WhatsApp"
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-[#1F2426]
          text-white
          transition-all
          duration-300
          hover:scale-105
          hover:bg-white
          hover:text-[#1F2426]
          focus:outline-none
          focus:ring-2
          focus:ring-white
          focus:ring-offset-2
          focus:ring-offset-[#D89B35]
        "
      >
        <MessageCircle size={19} strokeWidth={1.8} />
      </button>
    </div>
  );
};

export default FloatingActions;