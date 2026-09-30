import { Send } from "lucide-react";

const ContactForm = () => {
  return (
    <form className="space-y-6">

      {/* Name */}
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1F2426]"
        >
          Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          className="
            w-full
            border
            border-[#E5E2DC]
            bg-[#F7F5F0]
            px-4
            py-4
            text-sm
            text-[#1F2426]
            outline-none
            transition-all
            duration-300
            placeholder:text-[#6B7073]/60
            focus:border-[#D89B35]
            focus:bg-white
            focus:ring-1
            focus:ring-[#D89B35]
          "
        />
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <label
          htmlFor="phone"
          className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1F2426]"
        >
          Phone
        </label>

        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Enter your phone number"
          className="
            w-full
            border
            border-[#E5E2DC]
            bg-[#F7F5F0]
            px-4
            py-4
            text-sm
            text-[#1F2426]
            outline-none
            transition-all
            duration-300
            placeholder:text-[#6B7073]/60
            focus:border-[#D89B35]
            focus:bg-white
            focus:ring-1
            focus:ring-[#D89B35]
          "
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1F2426]"
        >
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          className="
            w-full
            border
            border-[#E5E2DC]
            bg-[#F7F5F0]
            px-4
            py-4
            text-sm
            text-[#1F2426]
            outline-none
            transition-all
            duration-300
            placeholder:text-[#6B7073]/60
            focus:border-[#D89B35]
            focus:bg-white
            focus:ring-1
            focus:ring-[#D89B35]
          "
        />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1F2426]"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your project"
          className="
            w-full
            resize-none
            border
            border-[#E5E2DC]
            bg-[#F7F5F0]
            px-4
            py-4
            text-sm
            leading-7
            text-[#1F2426]
            outline-none
            transition-all
            duration-300
            placeholder:text-[#6B7073]/60
            focus:border-[#D89B35]
            focus:bg-white
            focus:ring-1
            focus:ring-[#D89B35]
          "
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="
          inline-flex
          w-full
          items-center
          justify-center
          gap-2
          bg-[#D89B35]
          px-7
          py-4
          text-sm
          font-semibold
          uppercase
          tracking-[0.15em]
          text-white
          transition-all
          duration-300
          hover:bg-[#BD8227]
          hover:shadow-lg
          hover:shadow-[#D89B35]/20
          sm:w-auto
        "
      >
        SEND ENQUIRY
        <Send size={17} />
      </button>

    </form>
  );
};

export default ContactForm;