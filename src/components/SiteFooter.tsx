import { Linkedin, Instagram } from "lucide-react";
import endeavourWordmark from "@/assets/endeavour-wordmark.png";

const SiteFooter = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20">
          {/* Logo */}
          <div>
            <a href="https://endeavourii.com">
              <img src={endeavourWordmark} alt="Endeavour" className="h-[22px]" />
            </a>
          </div>

          {/* Links columns */}
          <div className="flex gap-20">
            {/* Main */}
            <div>
              <h4 className="text-sm text-white/50 mb-5">Main</h4>
              <ul className="space-y-3">
                <li><a href="https://endeavourii.com/about" className="text-sm text-white/90 hover:text-white transition-colors">About</a></li>
                <li><a href="https://endeavourii.com/companies" className="text-sm text-white/90 hover:text-white transition-colors">Companies</a></li>
                <li><a href="https://endeavourii.com/careers" className="text-sm text-white/90 hover:text-white transition-colors">Careers</a></li>
                <li><a href="https://endeavourii.com/contact" className="text-sm text-white/90 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm text-white/50 mb-5">Legal</h4>
              <ul className="space-y-3">
                <li><a href="https://endeavourii.com/privacy-policy" className="text-sm text-white/90 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="https://endeavourii.com/terms-of-use" className="text-sm text-white/90 hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="https://endeavourii.com/cookies" className="text-sm text-white/90 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Social icons */}
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/endeavour-industrial/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:border-white/60 transition-colors">
              <Linkedin className="h-4 w-4 text-white/80" />
            </a>
            <a href="https://x.com/endeavaborii" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:border-white/60 transition-colors">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-white/80 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a href="https://www.instagram.com/endeavourii/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:border-white/60 transition-colors">
              <Instagram className="h-4 w-4 text-white/80" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-white/40">
            © 2026 Endeavour Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;