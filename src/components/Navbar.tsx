import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

type Page =
  | "home"
  | "services"
  | "about"
  | "work"
  | "contact"
  | "privacy"
  | "terms";

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const links: Array<{ label: string; page: Page }> = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Services", page: "services" },
  { label: "Work", page: "work" },
  { label: "Contact", page: "contact" },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (page: Page) => {
    setOpen(false);
    onNavigate(page);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0d0d]/95 backdrop-blur-xl shadow-xl border-b border-[#c9956a]/20"
          : "bg-[#0d0d0d]/90 backdrop-blur-lg border-b border-[#c9956a]/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="h-16 lg:h-[72px] flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav("home")}
            className="flex items-center gap-2.5 group transition-all duration-300 hover:opacity-80 flex-shrink-0"
          >
            <img
              src="/sync7ven-logo.png"
              alt="sync7ven"
              className="h-9 w-12 sm:h-10 sm:w-13 rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-base sm:text-lg font-black tracking-[0.08em] text-white">
              SYNC
              <span className="text-[#c9956a] text-2xl sm:text-3xl font-black mx-[2px]">
                7
              </span>
              VEN
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNav(link.page)}
                className={`relative pb-1 uppercase text-sm tracking-wider font-semibold transition ${
                  currentPage === link.page
                    ? "text-[#c9956a]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}

                <span
                  className={`absolute left-0 -bottom-0.5 h-0.5 bg-[#c9956a] transition-all duration-300 ${
                    currentPage === link.page
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleNav("contact")}
              className="hidden lg:flex px-5 py-2 border border-[#c9956a] text-[#c9956a] rounded font-semibold uppercase tracking-wider hover:bg-[#c9956a] hover:text-black transition"
            >
              Get Started
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white hover:text-[#c9956a] p-2"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-[#111111] border-t border-[#c9956a]/10 px-5 py-5 flex flex-col gap-5">
          {links.map((link) => (
            <button
              key={link.page}
              onClick={() => handleNav(link.page)}
              className={`text-left uppercase tracking-wider transition ${
                currentPage === link.page
                  ? "text-[#c9956a]"
                  : "text-gray-300 hover:text-[#c9956a]"
              }`}
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => handleNav("contact")}
            className="mt-2 w-full py-3 rounded border border-[#c9956a] text-[#c9956a] font-bold uppercase hover:bg-[#c9956a] hover:text-black transition"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
