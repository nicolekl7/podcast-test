import { useState, useEffect } from "react";
import endeavourWordmark from "@/assets/endeavour-wordmark.png";

const navLinks = [
  { label: "About", href: "https://endeavourii.com/about" },
  { label: "Companies", href: "https://endeavourii.com/companies" },
  { label: "News", href: "https://endeavourii.com/news" },
  { label: "Careers", href: "https://endeavourii.com/careers" },
];

const SiteNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-200 border-b ${
        scrolled ? "bg-white backdrop-blur-sm border-border" : "bg-white border-border/50"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 flex items-center justify-between h-16">
        <a href="https://endeavourii.com" className="flex items-center">
          <img src={endeavourWordmark} alt="Endeavour" className="h-[19px] invert" />
        </a>
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm text-muted-foreground hover:text-foreground transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1.5px] after:bottom-0 after:left-0 after:bg-foreground after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://endeavourii.com/contact"
            className="text-sm border border-foreground/40 rounded-full px-5 py-1.5 text-foreground hover:bg-foreground/10 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default SiteNav;
