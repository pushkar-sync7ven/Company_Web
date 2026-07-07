import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

type Page =
  | "home"
  | "about"
  | "services"
  | "work"
  | "contact"
  | "privacy"
  | "terms";

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#080808] border-t border-white/5 pt-12 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/sync7ven-logo.png"
                alt="sync7ven"
                className="h-9 w-12 sm:h-10 sm:w-13 rounded-lg object-cover"
              />
              <span className="text-base sm:text-lg font-black tracking-[0.08em] text-white">
                SYNC
                <span className="text-[#c9956a] text-2xl sm:text-3xl font-black mx-[2px]">
                  7
                </span>
                VEN
              </span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-sm">
              Your vision. Our execution.<br></br>
              BUILD &bull; SYNC &bull; SCALE
            </p>
            <div className="flex gap-3">
              {[
                { icon: Twitter, href: "#" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/company/sync7ven/",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/sync7ven?igsh=NzFjbnN6bXB6bmo1",
                },
                // { icon: Github, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#c9956a] hover:border-[#c9956a]/50 hover:bg-[#c9956a]/5 transition-all duration-300 hover:scale-110"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold tracking-wider uppercase text-xs sm:text-sm mb-4 sm:mb-5">
              Navigation
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {[
                { label: "Home", page: "home" as Page },
                { label: "About", page: "about" as Page },
                { label: "Services", page: "services" as Page },
                { label: "Work", page: "work" as Page },
                { label: "Contact", page: "contact" as Page },
              ].map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="text-gray-400 text-xs sm:text-sm hover:text-[#c9956a] transition-all duration-300 hover:translate-x-1"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold tracking-wider uppercase text-xs sm:text-sm mb-4 sm:mb-5">
              Contact
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              <li className="flex items-start gap-2.5 text-gray-400 text-xs sm:text-sm">
                <Mail size={14} className="mt-0.5 text-[#c9956a] shrink-0" />
                sync7ven@gmail.com
              </li>
              <li className="flex items-start gap-2.5 text-gray-400 text-xs sm:text-sm">
                <Phone size={14} className="mt-0.5 text-[#c9956a] shrink-0" />
                +91 9322450943
              </li>
              <li className="flex items-start gap-2.5 text-gray-400 text-xs sm:text-sm">
                <MapPin size={14} className="mt-0.5 text-[#c9956a] shrink-0" />
                Global — Remote First
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <p className="text-gray-600 text-xs tracking-wider">
              &copy; {new Date().getFullYear()} SYNC
              <span className=" text-xs sm:text-xl mx-[1px]">7</span>VEN. All
              rights reserved.
            </p>

            <div className="flex items-center gap-4 sm:gap-6">
              <button
                onClick={() => onNavigate("privacy")}
                className="text-gray-500 text-xs tracking-wider hover:text-[#c9956a] transition-colors duration-300"
              >
                Privacy Policy
              </button>

              <span className="text-gray-700">|</span>

              <button
                onClick={() => onNavigate("terms")}
                className="text-gray-500 text-xs tracking-wider hover:text-[#c9956a] transition-colors duration-300"
              >
                Terms & Conditions
              </button>
            </div>

            <p className="text-gray-600 text-xs tracking-wider">
              BUILD &bull; SYNC &bull; SCALE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
