import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5 pt-12 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/sync7ven-logo.webp"
                alt="SYNC7VEN logo"
                width={1254}
                height={533}
                className="h-9 w-12 sm:h-10 sm:w-13 rounded-lg object-cover"
                decoding="async"
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
                { icon: Twitter, href: "", label: "Twitter" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/company/sync7ven/",
                  label: "LinkedIn",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/sync7ven?igsh=NzFjbnN6bXB6bmo1",
                  label: "Instagram",
                },
              ].map(({ icon: Icon, href, label }, i) =>
                href ? (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#c9956a] hover:border-[#c9956a]/50 hover:bg-[#c9956a]/5 transition-all duration-300 hover:scale-110"
                  >
                    <Icon size={16} aria-hidden="true" />
                  </a>
                ) : (
                  <span
                    key={i}
                    aria-disabled="true"
                    className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-gray-400"
                  >
                    <Icon size={16} aria-hidden="true" />
                  </span>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold tracking-wider uppercase text-xs sm:text-sm mb-4 sm:mb-5">
              Navigation
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Work", to: "/work" },
                { label: "Contact", to: "/contact" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-gray-400 text-xs sm:text-sm hover:text-[#c9956a] transition-all duration-300 hover:translate-x-1"
                  >
                    {item.label}
                  </Link>
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
            <p className="text-gray-400 text-xs tracking-wider">
              &copy; {new Date().getFullYear()} SYNC
              <span className=" text-xs sm:text-xl mx-[1px]">7</span>VEN. All
              rights reserved.
            </p>

            <div className="flex items-center gap-4 sm:gap-6">
              <Link
                to="/privacy"
                className="text-gray-400 text-xs tracking-wider hover:text-[#c9956a] transition-colors duration-300"
              >
                Privacy Policy
              </Link>

              <span className="text-gray-700">|</span>

              <Link
                to="/terms"
                className="text-gray-400 text-xs tracking-wider hover:text-[#c9956a] transition-colors duration-300"
              >
                Terms & Conditions
              </Link>
            </div>

            <p className="text-gray-400 text-xs tracking-wider">
              BUILD &bull; SYNC &bull; SCALE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
