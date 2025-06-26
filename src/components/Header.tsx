// src/components/Header.tsx (Revised - no "Lag" in mobile dropdown, desktop "Lag" button here)
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navItems = [
    { label: "Hem", to: "/" },
    { label: "Arena", to: "/arena" },
    { label: "Partners", to: "/partners" },
    { label: "Lag", to: "/teams" },
    { label: "Kontakt", to: "/kontakt" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 header-transition",
        isScrolled
          ? "bg-handball-black/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://az729104.cdn.laget.se/emblem_11226722.png;width=480;height=480;paddingWidth=16;mode=pad;scale=both;anchor=middlecenter"
              alt="Härnösands HF"
              className="h-10 w-10"
            />
            <div className="text-white">
              <div className="font-bold text-lg leading-tight">
                Härnösands HF
              </div>
              <div className="text-xs text-gray-300">Handbollsklubb</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={cn(
                  "text-white hover:text-handball-orange transition-colors duration-200 font-medium relative group",
                  location.pathname === item.to && "text-handball-orange",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-handball-orange transition-all duration-300 group-hover:w-full",
                    location.pathname === item.to && "w-full",
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 z-[60]"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation (Header's dropdown menu) */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-handball-black/95 backdrop-blur-sm animate-fade-in-up z-40 overflow-y-auto">
            <nav className="flex flex-col py-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className={cn(
                    "text-white hover:text-handball-orange transition-colors duration-200 font-medium py-2 px-4",
                    location.pathname === item.to &&
                      "text-handball-orange bg-handball-orange/10",
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>

      <style jsx>{`
        .header-transition {
          transition:
            background-color 0.3s ease,
            box-shadow 0.3s ease;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  );
};
